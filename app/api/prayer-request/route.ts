import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      type,
      intendedFor,
      description,
      firstName,
      lastName,
      streetAddress,
      otherAddress,
      city,
      state,
      zipPostal,
      country,
      region,
      phone,
      email,
    } = body;

    // Validate required fields
    if (!description || !firstName || !lastName || !email) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format subject line based on type
    const subject =
      type === 'request'
        ? `[Prayer Request] – from ${firstName} ${lastName}`
        : `[Praise Report] – from ${firstName} ${lastName}`;

    // Format email body with all submission details
    const emailBody = `
Prayer ${type === 'request' ? 'Request' : 'Report'} Submission
========================================

Type: ${type === 'request' ? 'Prayer Request' : 'Praise Report'}
Intended For: ${intendedFor === 'group' ? 'Appropriate Prayer Group' : 'Everyone'}

Description:
${description}

Contact Information:
-------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}

Address:
Street: ${streetAddress || 'Not provided'}
Other: ${otherAddress || 'N/A'}
City: ${city || 'Not provided'}
State/Province: ${state || 'Not provided'}
Zip/Postal: ${zipPostal || 'Not provided'}
Country: ${country || 'Not provided'}
Region: ${region || 'Not provided'}
`;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'smitherama@aol.com',
      subject: subject,
      text: emailBody,
    });

    if (result.error) {
      console.error('Resend error:', JSON.stringify(result.error, null, 2));
      return Response.json(
        {
          success: false,
          error: result.error?.message || 'Failed to send email',
          details: process.env.NODE_ENV === 'development' ? result.error : undefined
        },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: result.data?.id });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Prayer request error:', errorMessage);
    return Response.json(
      {
        success: false,
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    );
  }
}

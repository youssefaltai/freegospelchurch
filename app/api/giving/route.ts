import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { amount, givingType, name, email } = body;

    // Validate required fields
    if (!amount || !givingType) {
      return Response.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format subject line
    const subject = `New Giving Submission – ${
      givingType === 'tithe' ? 'Tithe' : 'Offering'
    }`;

    // Format email body
    const emailBody = `
New Giving Submission
========================================

Type: ${givingType === 'tithe' ? 'Tithe' : 'Offering'}
Amount: $${parseFloat(amount).toFixed(2)}

Submitter Information:
${name ? `Name: ${name}` : 'Name: Not provided'}
${email ? `Email: ${email}` : 'Email: Not provided'}
`;

    // Send email using Resend
    const result = await resend.emails.send({
      from: 'info@culpeperfgc.org',
      to: 'smitherama@aol.com',
      subject: subject,
      text: emailBody,
    });

    if (result.error) {
      console.error('Resend error:', result.error);
      return Response.json(
        { success: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return Response.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error('Giving submission error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

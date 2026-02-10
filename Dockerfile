FROM node:20-alpine

WORKDIR /app

# Copy static site files into the image
COPY . /app

# Install a simple static file server
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]


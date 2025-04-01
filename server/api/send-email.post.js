
import nodemailer from 'nodemailer';
import { emailTemplate } from '~/utils';
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const { name, subject, message, to } = body;

    if (!to) {
      return {
        statusCode: 400,
        body: 'Missing required fields'
      };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const emailHtml = emailTemplate
    .replace("{{store_link}}", process.env.URL_PRODUCT)
    .replace("{{name}}", name)
    .replace("{{subject}}", subject)
    .replace("{{message}}", message.replace(/\n/g, "<br>"));

    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM ||  '"GoMart" <no-reply@gomart.com>',
      to,
      subject,
      html: emailHtml
    });

    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      body: {
        message: 'Email sent successfully',
        messageId: info.messageId
      }
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: {
        message: 'Failed to send email',
        error: error.message
      }
    };
  }
});
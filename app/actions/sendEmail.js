'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('KEY EXISTS:', !!process.env.RESEND_API_KEY);

export async function sendEmail({ name, email, message }) {
  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['charanvardham@gmail.com'],
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `
    });

    console.log('RESEND RESULT', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

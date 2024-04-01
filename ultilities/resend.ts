import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  fromName: any,
  fromEmail: any,
  toEmail: any,
  subject: any,
  text: any,
) => {
  const { data, error } = await resend.emails.send({
    from: `${fromName} <onboarding@resend.dev>`,
    to: toEmail,
    cc: fromEmail,
    reply_to: fromEmail,
    subject: subject,
    text: text,
  });
  if (error) {
    throw error;
  } else {
    return data;
  }
};

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: any,
  toEmail: any,
  fromEmail: any,
  subject: any,
  text: any,
) => {
  const { data, error } = await resend.emails.send({
    from: `${name} <onboarding@resend.dev>`,
    to: toEmail,
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

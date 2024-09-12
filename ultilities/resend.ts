import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (
  name: any,
  fromEmail: any,
  toEmail: any,
  replyToEmail: any,
  subject: any,
  text: any,
) => {
  const { data, error } = await resend.emails.send({
    from: `${name} <${fromEmail}>`,
    to: toEmail,
    replyTo: replyToEmail,
    subject: subject,
    text: text,
  });
  if (error) {
    throw error;
  } else {
    return data;
  }
};

'use server';
import { z } from 'zod';
import { SendEmailState } from '@/ultilities/definitions';
import { sendEmail } from '@/ultilities/resend';

const SendEmailSchema = z.object({
  email: z.string().email(),
  text: z.string().min(10, { message: 'Text must be at least 10 characters.' }),
});
export const handleSendContactForm = async (
  _sendEmailState: SendEmailState,
  formData: FormData,
  gitHubUserEmail: any,
  gitHubUserName: any,
) => {
  const parsedFormData = SendEmailSchema.safeParse({
    email: formData.get('email'),
    text: formData.get('text'),
  });
  if (!parsedFormData.success) {
    return {
      errors: parsedFormData.error.flatten().fieldErrors,
      message: 'Invalid email or text.',
    };
  }
  try {
    await sendEmail(
      gitHubUserName,
      gitHubUserEmail,
      gitHubUserEmail,
      parsedFormData.data.email,
      'Portfolio Contact Form',
      parsedFormData.data.text,
    );
    await sendEmail(
      gitHubUserName,
      gitHubUserEmail,
      parsedFormData.data.email,
      gitHubUserEmail,
      'Thank you for contacting me!',
      `Hello! I have received your email and will get back to you as soon as possible.\nHere is a copy of your message:\n\n${parsedFormData.data.text}\n\nBest regards,\n${gitHubUserName}`,
    );
    return 'Email sent successfully.';
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to send email.',
    };
  }
};

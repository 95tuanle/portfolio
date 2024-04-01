'use server';
import { z } from 'zod';
import { SendEmailState } from '@/ultilities/definitions';
import { sendEmail } from '@/ultilities/resend';

const SendEmailSchema = z.object({
  email: z.string().email(),
  text: z.string().min(10, { message: 'Text must be at least 10 characters.' }),
});
export const handleSendEmail = async (
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
      'Portfolio - ' + gitHubUserName,
      gitHubUserEmail,
      parsedFormData.data.email,
      'Email from Portfolio',
      parsedFormData.data.text,
    );
    return 'Email sent successfully.';
  } catch (error) {
    console.error(error);
    return {
      message: 'Failed to send email.',
    };
  }
};

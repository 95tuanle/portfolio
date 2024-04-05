'use client';
import { useFormState } from 'react-dom';
import { SendEmailState } from '@/ultilities/definitions';
import { handleSendContactForm } from '@/ultilities/actions';

const ContactClient = ({ gitHubUserEmail, gitHubUserName }: any) => {
  const [state, dispatch] = useFormState(
    (sendEmailState: SendEmailState, formData: FormData) =>
      handleSendContactForm(
        sendEmailState,
        formData,
        gitHubUserEmail,
        gitHubUserName,
      ),
    undefined,
  );
  return typeof state === 'string' ? (
    <h1 className="p-3 mx-3">{state}</h1>
  ) : (
    <form action={dispatch} className="p-3 mx-3">
      <input
        type="email"
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-base placeholder:text-gray-500 bg-transparent"
        name="email"
        placeholder="Email"
        required={true}
        aria-describedby="email-error"
      />
      {typeof state == 'object' &&
        state?.errors?.email &&
        state?.errors.email.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      <textarea
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-base placeholder:text-gray-500 bg-transparent mt-3"
        name="text"
        placeholder="Text"
        required={true}
        minLength={10}
        aria-describedby="text-error"
      />
      {typeof state == 'object' &&
        state?.errors?.text &&
        state?.errors.text.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
      <button
        className="bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 rounded-full px-2 py-1 text-xs font-semibold mt-3"
        type="submit"
      >
        Send
      </button>
      {typeof state == 'object' && state?.message && (
        <p className="mt-2 text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
};

export default ContactClient;

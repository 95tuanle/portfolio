'use client';

const ContactClient = ({}: any) => {
  return (
    <div className="p-3 mx-3">
      <input
        type="email"
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm placeholder:text-gray-500 bg-transparent"
        // id="email"
        // name="email"
        placeholder="Email address"
        required={true}
      />
      <textarea
        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg p-3 text-sm placeholder:text-gray-500 bg-transparent mt-3"
        // id="text"
        // name="text"
        placeholder="Text"
        required={true}
      />
      <button
        className="bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 rounded-full px-2 py-1 text-xs font-semibold m-1"
        type="submit"
      >
        Send
      </button>
    </div>
  );
};

export default ContactClient;

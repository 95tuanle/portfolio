import ContactClient from '@/components/contact/contact.client';

const Contact = ({ gitHubUserEmail, gitHubUserName }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Contact</div>
    <ContactClient
      gitHubUserEmail={gitHubUserEmail}
      gitHubUserName={gitHubUserName}
    />
  </>
);

export default Contact;

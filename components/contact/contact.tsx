import ContactClient from '@/components/contact/contact.client';

const Contact = ({ email, name }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Contact</div>
    <ContactClient email={email} name={name} />
  </>
);

export default Contact;

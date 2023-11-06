const Footer = ({gitHubUser, phoneNumber}: any) => <footer className="p-3 text-center">
  <p className="mb-3">
    Contact me:
    <a
      href={`mailto:${gitHubUser.email}`}
      className="ml-3 hover:underline"
    >
      {gitHubUser.email}
    </a>
    <span className="mx-3">|</span>
    <a
      href={`tel:${phoneNumber}`}
      className="hover:underline"
    >
      {phoneNumber}
    </a>
  </p>
</footer>;

export default Footer;
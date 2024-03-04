const Footer = ({ gitHubUser, phoneNumber }: any) => (
  <footer className="p-3 text-center">
    <a href={'/'} className="hover:underline py-3" aria-label={'Main page'}>
      &copy; {new Date().getFullYear()} {gitHubUser['name']}
    </a>
    <p className="mb-3">
      <a
        href={`mailto:${gitHubUser['email']}`}
        className="hover:underline py-3"
      >
        {gitHubUser['email']}
      </a>
      <span className="mx-3">|</span>
      <a href={phoneNumber} className="hover:underline py-3">
        {phoneNumber.replace('tel:', '')}
      </a>
    </p>
  </footer>
);

export default Footer;

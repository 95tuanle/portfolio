const Footer = ({ gitHubUser, phoneNumber }: any) => (
  <footer className="p-3 text-center break-words">
    <a
      href={'/'}
      className="hover:underline py-4"
      aria-label={'Main Page'}
      title={'Main Page'}
    >
      &copy; {new Date().getFullYear()} {gitHubUser['name']}
    </a>
    <p className="py-3">
      <a
        href={`mailto:${gitHubUser['email']}`}
        className="hover:underline py-4"
        aria-label={'Send An Email'}
        title={'Send An Email'}
      >
        {gitHubUser['email']}
      </a>
      <span className="mx-3">|</span>
      <a
        href={phoneNumber}
        className="hover:underline py-4"
        aria-label={'Make A Call'}
        title={'Make A Call'}
      >
        {phoneNumber.replace('tel:', '')}
      </a>
    </p>
  </footer>
);

export default Footer;

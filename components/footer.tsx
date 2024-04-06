import LinkWrapper from '@/components/link-wrapper';

const Footer = ({ gitHubUser, phoneNumber }: any) => (
  <footer className="text-center break-words m-6">
    <LinkWrapper href={'/'} label={'Main Page'} title={'Main Page'}>
      &copy; {new Date().getFullYear()} {gitHubUser.name}
    </LinkWrapper>
    <LinkWrapper
      href={`mailto:${gitHubUser.email}`}
      label={'Send An Email'}
      title={'Send An Email'}
    >
      {gitHubUser.email}
    </LinkWrapper>
    <LinkWrapper
      href={`tel:${phoneNumber}`}
      label={'Make A Call'}
      title={'Make A Call'}
    >
      {phoneNumber.replace('tel:', '')}
    </LinkWrapper>
  </footer>
);

export default Footer;

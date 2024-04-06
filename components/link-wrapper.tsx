const LinkWrapper = ({
  href,
  label,
  title,
  children,
}: {
  href: string;
  label: string;
  title: string;
  children: any;
}) => (
  <div className="block py-4">
    <a
      href={href}
      className="hover:underline py-4"
      aria-label={label}
      title={title}
    >
      {children}
    </a>
  </div>
);

export default LinkWrapper;

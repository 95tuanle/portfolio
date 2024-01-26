const Footer = ({gitHubUser, phoneNumber}: any) => <footer className="p-3 text-center">
  <a href={"/"} className="hover:underline"
     aria-label={"Main page"}>&copy; {new Date().getFullYear()} {gitHubUser["name"]}</a>
  <p className="mb-3">
    <a href={`mailto:${gitHubUser["email"]}`} className="hover:underline">{gitHubUser["email"]}</a>
    <span className="mx-3">|</span>
    <a href={phoneNumber} className="hover:underline">{phoneNumber.replace("tel:", "")}</a>
  </p>
</footer>;

export default Footer;
import Image from "next/image";
import {TbBrandGithub, TbBrandLeetcode, TbBrandLinkedin, TbBrandX, TbMail, TbPhone} from "react-icons/tb";

const GitHubUser = ({gitHubUser, phoneNumber, leetCodeUrl, linkedInUrl, iconSize}: any) => <div className="p-3">
  <div className="flex items-center space-x-3">
    <Image
      className="rounded-full w-32 h-32"
      src={gitHubUser["avatar_url"]}
      alt="user avatar"
      width={300}
      height={300}
    />
    <div>
      <h1 className="text-3xl font-semibold">{gitHubUser.name}</h1>
      <p className="text-gray-300">{gitHubUser.bio}</p>
      <p className="text-gray-300">{gitHubUser.location}</p>
      <div className="flex items-center space-x-3">
        <a href={linkedInUrl} target={"_blank"}><TbBrandLinkedin size={iconSize}/></a>
        <a href={gitHubUser.html_url} target={"_blank"}><TbBrandGithub size={iconSize}/></a>
        <a href={leetCodeUrl} target={"_blank"}><TbBrandLeetcode size={iconSize}/></a>
        <a href={`https://x.com/${gitHubUser.twitter_username}`} target={"_blank"}><TbBrandX size={iconSize}/></a>
        <a href={`mailto:${gitHubUser.email}`} target={"_blank"}><TbMail size={iconSize}/></a>
        <a href={`tel:${phoneNumber}`} target={"_blank"}><TbPhone size={iconSize}/></a>
      </div>
    </div>
  </div>
</div>;

export default GitHubUser;
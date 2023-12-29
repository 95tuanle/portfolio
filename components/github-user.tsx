import Image from "next/image";
import {
  TbBrandGithub,
  TbBrandLeetcode,
  TbBrandLinkedin,
  TbBrandStackoverflow,
  TbBrandX,
  TbMail,
  TbPhone
} from "react-icons/tb";
// import {SiWellfound} from "react-icons/si";

const GitHubUser = ({
                      gitHubUser, phoneNumber, leetCodeUrl, linkedInUrl, stackOverflowUrl, iconSize //, wellfoundUrl
                    }: any) => <div className="p-3">
  <div className="flex items-center space-x-3">
    <Image className="rounded-full w-32 h-32" src={gitHubUser["avatar_url"]} alt="user avatar" width={128}
           height={128}/>
    <div>
      <h1 className="text-3xl font-semibold">{gitHubUser["name"]}</h1>
      <p className="text-gray-300">{gitHubUser["bio"]}</p>
      <p className="text-gray-300">{gitHubUser["location"]}</p>
    </div>
  </div>
  <br/>
  <div className="flex items-center space-x-3">
    <a href={linkedInUrl} target={"_blank"} aria-label={"LinkedIn Profile"}><TbBrandLinkedin size={iconSize}/></a>
    <a href={gitHubUser["html_url"]} target={"_blank"} aria-label={"GitHub Profile"}><TbBrandGithub
      size={iconSize}/></a>
    <a href={leetCodeUrl} target={"_blank"} aria-label={"LeetCode Profile"}><TbBrandLeetcode size={iconSize}/></a>
    <a href={`https://x.com/${gitHubUser["twitter_username"]}`} target={"_blank"} aria-label={"X Profile"}><TbBrandX
      size={iconSize}/></a>
    {/*<a href={wellfoundUrl} target={"_blank"} aria-label={"Wellfound Profile"}><SiWellfound size={iconSize}/></a>*/}
    <a href={stackOverflowUrl} target={"_blank"} aria-label={"StackOverflow Profile"}><TbBrandStackoverflow
      size={iconSize}/></a>
    <a href={`mailto:${gitHubUser["email"]}`} target={"_blank"} aria-label={"Send An Email"}><TbMail
      size={iconSize}/></a>
    <a href={`tel:${phoneNumber}`} target={"_blank"} aria-label={"Call Me"}><TbPhone size={iconSize}/></a>
  </div>
</div>;

export default GitHubUser;
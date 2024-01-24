import Image from "next/image";
import {TbMail, TbPhone} from "react-icons/tb";
import {
  SiGithub,
  SiLeetcode,
  SiLinkedin,
  SiReddit,
  SiSoundcloud,
  SiStackoverflow,
  SiWellfound,
  SiX
} from "react-icons/si";

const GitHubUser = ({
                      gitHubUser,
                      phoneNumber,
                      leetCodeUrl,
                      linkedInUrl,
                      stackOverflowUrl,
                      wellfoundUrl,
                      redditUrl,
                      soundCloudUrl,
                      iconSize
                    }: any) => <div className="flex flex-col items-center p-3">
  <div className="flex flex-col items-center space-x-3 space-y-3">
    <Image priority={true} className="rounded-full w-36 h-36" src={gitHubUser["avatar_url"]} alt="user avatar"
           width={144} height={144}/>
    <div>
      <div className="text-3xl font-semibold">{gitHubUser["name"]}</div>
      <div className="text-gray-300">{gitHubUser["bio"]}</div>
      <div className="text-gray-300">{gitHubUser["location"]}</div>
    </div>
  </div>
  <div className="flex space-x-3 space-y-3">
    <a className="mt-3" href={linkedInUrl} target={"_blank"} aria-label={"LinkedIn Profile"}><SiLinkedin
      size={iconSize}/></a>
    <a href={gitHubUser["html_url"]} target={"_blank"} aria-label={"GitHub Profile"}><SiGithub size={iconSize}/></a>
    <a href={leetCodeUrl} target={"_blank"} aria-label={"LeetCode Profile"}><SiLeetcode size={iconSize}/></a>
    <a href={stackOverflowUrl} target={"_blank"} aria-label={"StackOverflow Profile"}><SiStackoverflow size={iconSize}/></a>
    <a href={`https://x.com/${gitHubUser["twitter_username"]}`} target={"_blank"} aria-label={"X Profile"}><SiX
      size={iconSize}/></a>
    <a href={redditUrl} target={"_blank"} aria-label={"Reddit Profile"}><SiReddit size={iconSize}/></a>
    <a href={wellfoundUrl} target={"_blank"} aria-label={"Wellfound Profile"}><SiWellfound size={iconSize}/></a>
    <a href={soundCloudUrl} target={"_blank"} aria-label={"SoundCloud Profile"}><SiSoundcloud size={iconSize}/></a>
  </div>
  <div className="flex space-x-3 space-y-3">
    <a className="mt-3" href={`mailto:${gitHubUser["email"]}`} target={"_blank"} aria-label={"Send An Email"}><TbMail
      size={iconSize}/></a>
    <a href={`tel:${phoneNumber}`} target={"_blank"} aria-label={"Call Me"}><TbPhone size={iconSize}/></a>
  </div>
</div>;

export default GitHubUser;
import {getGitHubUser, getGitHubUserRepos} from "@/github";
import GitHubUser from "@/components/github-user";
import GithubUserRepos from "@/components/github-user-repos";
import Footer from "@/components/footer";

export const revalidate = 3600;

export const generateMetadata = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    return {
      title: `Portfolio - ${gitHubUser["name"]}`,
      description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
      metadataBase: new URL(gitHubUser["avatar_url"]),
      icons: {
        icon: {url: gitHubUser["avatar_url"]},
        shortcut: {url: gitHubUser["avatar_url"]},
        apple: {url: gitHubUser["avatar_url"]},
        other: {url: gitHubUser["avatar_url"]}
      },
      openGraph: {
        title: `Portfolio - ${gitHubUser["name"]}`,
        description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
        images: [{url: gitHubUser["avatar_url"]}],
        url: `${gitHubUser["html_url"]}`
      },
      twitter: {
        title: `Portfolio - ${gitHubUser["name"]}`,
        description: `Welcome to the portfolio of ${gitHubUser["name"]}, a ${gitHubUser["bio"]} based in ${gitHubUser["location"]}. Explore my projects and skills.`,
        creator: `@${gitHubUser["twitter_username"]}`,
        images: [{url: gitHubUser["avatar_url"]}]
      }
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

const Page = async () => {
  try {
    const gitHubUser = await getGitHubUser();
    const gitHubUserRepos = await getGitHubUserRepos();
    // console.log(gitHubUserRepos);
    const phoneNumber = `+1 (647) 510-2746`;
    const leetCodeUrl = `https://leetcode.com/95tuanle/`;
    const linkedInUrl = `https://www.linkedin.com/in/95tuanle/`;
    // const wellfoundUrl = `https://wellfound.com/95tuanle`;
    const stackOverflowUrl = `https://stackoverflow.com/users/9129836/95tuanle`;
    const iconSize = 30;
    return <>
      <div className={"text-black text-center bg-yellow-500 p-3 rounded"}>Work in Progress</div>
      <GitHubUser gitHubUser={gitHubUser} phoneNumber={phoneNumber} leetCodeUrl={leetCodeUrl} linkedInUrl={linkedInUrl}
                  stackOverflowUrl={stackOverflowUrl} iconSize={iconSize} // wellfoundUrl={wellfoundUrl}
      />
      <GithubUserRepos gitHubUserRepos={gitHubUserRepos}/>
      <Footer gitHubUser={gitHubUser} phoneNumber={phoneNumber}/>
    </>;
  } catch (error) {
    console.error(error);
    return <>Something went wrong.</>;
  }
};

export default Page;
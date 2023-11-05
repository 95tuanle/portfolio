import {getGitHubUser, getGitHubUserRepos} from "@/github";
import GitHubUser from "@/components/github-user";
import GithubUserRepos from "@/components/github-user-repos";

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
    console.log(gitHubUser);
    const gitHubUserRepos = await getGitHubUserRepos();
    return <>
      <GitHubUser gitHubUser={gitHubUser}/>
      <GithubUserRepos gitHubUserRepos={gitHubUserRepos}/>
    </>;
  } catch (error) {
    console.error(error);
    return <>Something went wrong.</>;
  }
};

export default Page;
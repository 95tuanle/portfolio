import GitHubUserRepo from "@/components/github-user-repo";

const GithubUserRepos = ({gitHubUserRepos}: any) => gitHubUserRepos.map((gitHubUserRepo: any) => <GitHubUserRepo
  gitHubUserRepo={gitHubUserRepo}
  key={gitHubUserRepo["id"]}/>);

export default GithubUserRepos;
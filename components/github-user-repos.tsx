import GitHubUserRepo from "@/components/github-user-repo";

const GithubUserRepos = ({gitHubUserRepos}: any) => <>
  <div className="text-3xl font-semibold p-3 m-3">Projects</div>
  {gitHubUserRepos.map((gitHubUserRepo: any) => <GitHubUserRepo gitHubUserRepo={gitHubUserRepo}
                                                                key={gitHubUserRepo["id"]}/>)}
</>;

export default GithubUserRepos;
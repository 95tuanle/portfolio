import Project from "@/components/project";
import {getGitHubUserRepoFileContent} from "@/ultilities/github";

const Projects = ({gitHubUserRepos}: any) => <>
  <div className="text-3xl font-semibold p-3 m-3">Projects</div>
  {gitHubUserRepos.map(async (gitHubUserRepo: any) => {
    if (gitHubUserRepo["name"] == gitHubUserRepo["owner"]["login"]) {
      try {
        const gitHubUserRepoReadmeFileContent = await getGitHubUserRepoFileContent(gitHubUserRepo["owner"]["login"], gitHubUserRepo["name"], "README.md");
        // console.log(gitHubUserRepoReadmeFileContent);
      } catch (error) {
        console.error(error)
      }
    }
    return <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo["id"]}/>
  })}
</>;

export default Projects;
import Project from "@/components/project";

const Projects = ({gitHubUserRepos}: any) => <>
  <div className="text-2xl font-semibold p-3 mx-3 mt-6">Projects</div>
  {gitHubUserRepos.map((gitHubUserRepo: any) => <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo["id"]}/>)}
</>;

export default Projects;
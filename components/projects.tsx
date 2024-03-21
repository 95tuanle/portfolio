import Project from '@/components/project';
import ProjectsClient from '@/components/projects.client';

const sliceThreshold = 20;
const Projects = ({ gitHubUserRepos }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Projects</div>
    {gitHubUserRepos.slice(0, sliceThreshold).map((gitHubUserRepo: any) => (
      <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo['id']} />
    ))}
    <ProjectsClient gitHubUserRepos={gitHubUserRepos.slice(sliceThreshold)} />
  </>
);

export default Projects;

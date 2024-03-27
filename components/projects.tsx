import Project from '@/components/project';
import ProjectsClient from '@/components/projects.client';

const Projects = ({ gitHubUserRepos, numberOfProjects }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Projects</div>
    {gitHubUserRepos.slice(0, numberOfProjects).map((gitHubUserRepo: any) => (
      <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo['id']} />
    ))}
    <ProjectsClient>
      {gitHubUserRepos.slice(numberOfProjects).map((gitHubUserRepo: any) => (
        <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo['id']} />
      ))}
    </ProjectsClient>
  </>
);

export default Projects;

import ProjectSub from '@/components/projects/project.sub';
import ProjectsClient from '@/components/projects/projects.client';
import SubWrapper from '@/components/sub-wrapper';

const Projects = ({ gitHubUserRepos, numberOfProjects }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Projects</div>
    {gitHubUserRepos.slice(0, numberOfProjects).map((gitHubUserRepo: any) => (
      <SubWrapper key={gitHubUserRepo['id']}>
        <ProjectSub gitHubUserRepo={gitHubUserRepo} />
      </SubWrapper>
    ))}
    <ProjectsClient>
      {gitHubUserRepos.slice(numberOfProjects).map((gitHubUserRepo: any) => (
        <SubWrapper key={gitHubUserRepo['id']}>
          <ProjectSub gitHubUserRepo={gitHubUserRepo} />
        </SubWrapper>
      ))}
    </ProjectsClient>
  </>
);

export default Projects;

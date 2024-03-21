import Project from '@/components/project';

const Projects = ({ gitHubUserRepos }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Projects</div>
    {gitHubUserRepos.slice(0, 20).map((gitHubUserRepo: any) => (
      <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo['id']} />
    ))}

    {/*<div className="text-center p-3">*/}
    {/*  <button*/}
    {/*    className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"*/}
    {/*    onClick={() => {*/}
    {/*      setCount(count + 10);*/}
    {/*    }}*/}
    {/*  >*/}
    {/*    Load More*/}
    {/*  </button>*/}
    {/*</div>*/}
  </>
);

export default Projects;

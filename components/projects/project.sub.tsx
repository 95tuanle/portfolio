import TopicsOrLanguages from '@/components/projects/topics-or-languages';

const ProjectSub = ({ gitHubUserRepo }: any) => (
  <>
    <div>
      <a
        className="text-lg font-semibold hover:underline"
        href={gitHubUserRepo['html_url']}
        target={'_blank'}
        aria-label={gitHubUserRepo['name']}
        title={gitHubUserRepo['name']}
      >
        {gitHubUserRepo['name']}
      </a>
    </div>
    {gitHubUserRepo['description'] && (
      <div className="text-gray-700 dark:text-gray-300">
        {gitHubUserRepo['description']}
      </div>
    )}
    {gitHubUserRepo['homepage'] && (
      <div className="mt-3">
        <a
          className="hover:underline"
          href={gitHubUserRepo['homepage']}
          target={'_blank'}
          aria-label={gitHubUserRepo['homepage']}
          title={gitHubUserRepo['homepage']}
        >
          {gitHubUserRepo['homepage']}
        </a>
      </div>
    )}
    <TopicsOrLanguages topicsOrLanguages={gitHubUserRepo['topics']} />
    <TopicsOrLanguages
      topicsOrLanguages={Object.keys(gitHubUserRepo['languages'])}
    />
  </>
);

export default ProjectSub;

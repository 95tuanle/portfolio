import TopicsOrLanguages from '@/components/topics-or-languages';

const Project = ({ gitHubUserRepo }: any) => (
  <div className="p-3 mx-6 my-3 border border-gray-300 dark:border-gray-700 rounded-lg">
    <a
      className="text-lg font-semibold mb hover:underline"
      href={gitHubUserRepo['html_url']}
      target={'_blank'}
      aria-label={gitHubUserRepo['name']}
      title={gitHubUserRepo['name']}
    >
      {gitHubUserRepo['name']}
    </a>
    {gitHubUserRepo['description'] && (
      <div className="text-gray-700 dark:text-gray-300">
        {gitHubUserRepo['description']}
      </div>
    )}
    {gitHubUserRepo['homepage'] && (
      <a
        className="hover:underline"
        href={gitHubUserRepo['homepage']}
        target={'_blank'}
        aria-label={gitHubUserRepo['homepage']}
        title={gitHubUserRepo['homepage']}
      >
        {gitHubUserRepo['homepage']}
      </a>
    )}
    <TopicsOrLanguages topicsOrLanguages={gitHubUserRepo['topics']} />
    <TopicsOrLanguages
      topicsOrLanguages={Object.keys(gitHubUserRepo['languages'])}
    />
  </div>
);

export default Project;

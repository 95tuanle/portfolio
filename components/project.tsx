import Languages from '@/components/languages';

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
    <div className="text-gray-700 dark:text-gray-300 mb-3">
      {gitHubUserRepo['description']}
    </div>
    <Languages languages={gitHubUserRepo['languages']} />
  </div>
);

export default Project;

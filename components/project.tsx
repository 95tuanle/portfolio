const Project = ({ gitHubUserRepo }: any) => {
  return (
    <div className="p-3 ml-6">
      <a
        className="text-lg font-semibold mb hover:underline"
        href={gitHubUserRepo['html_url']}
        target={'_blank'}
        aria-label={gitHubUserRepo['name']}
      >
        {gitHubUserRepo['name']}
      </a>
      <div className="text-gray-700 dark:text-gray-300 mb-3">
        {gitHubUserRepo['description']}
      </div>
    </div>
  );
};

export default Project;

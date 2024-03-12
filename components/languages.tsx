import { getGitHubUserRepoLanguages } from '@/ultilities/github';

const Languages = async ({ owner, repo }: any) => {
  try {
    const languages = await getGitHubUserRepoLanguages(owner, repo);
    return (
      <div className="flex flex-wrap">
        {Object.keys(languages).map((language) => {
          return (
            <div
              key={language}
              className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-2 py-1 text-xs font-semibold m-1"
            >
              {language}
            </div>
          );
        })}
      </div>
    );
  } catch (error) {
    console.error(error);
    return <>Something went wrong.</>;
  }
};

export default Languages;

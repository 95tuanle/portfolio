import Languages from '@/components/languages';
import { Suspense } from 'react';
import { Loading } from '@/components/loading';

const Project = async ({ gitHubUserRepo }: any) => (
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
    <Suspense fallback={<Loading />}>
      <Languages
        owner={gitHubUserRepo['owner']['login']}
        repo={gitHubUserRepo['name']}
      />
    </Suspense>
  </div>
);

export default Project;

'use client';
import { useState } from 'react';
import Project from '@/components/project';

const ProjectsClient = ({ gitHubUserRepos }: any) => {
  const [sliceThreshold, setSliceThreshold] = useState(0);
  return (
    <>
      {gitHubUserRepos.slice(0, sliceThreshold).map((gitHubUserRepo: any) => (
        <Project gitHubUserRepo={gitHubUserRepo} key={gitHubUserRepo['id']} />
      ))}
      <div className="text-center p-3">
        {sliceThreshold < gitHubUserRepos.length ? (
          <button
            className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
            onClick={() => setSliceThreshold(sliceThreshold + 10)}
          >
            Load More
          </button>
        ) : (
          <button
            className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
            onClick={() => setSliceThreshold(0)}
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
};

export default ProjectsClient;

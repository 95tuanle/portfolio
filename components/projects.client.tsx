'use client';
import { ReactNode, useState } from 'react';

const ProjectsClient = ({ children }: { children: ReactNode }) => {
  const [sliceThreshold, setSliceThreshold] = useState(0);
  return (
    <>
      {Array.isArray(children) ? (
        <>
          {children.slice(0, sliceThreshold).map((child: any) => child)}
          <div className="text-center p-3">
            {sliceThreshold < children.length ? (
              <button
                className="bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 rounded-full px-2 py-1 text-xs font-semibold m-1"
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
      ) : null}
    </>
  );
};

export default ProjectsClient;

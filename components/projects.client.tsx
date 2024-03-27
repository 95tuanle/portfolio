'use client';
import { ReactElement, useCallback, useMemo, useState } from 'react';

const ProjectsClient = ({ children }: { children: ReactElement[] }) => {
  const [sliceThreshold, setSliceThreshold] = useState(0);

  const projects = useMemo(() => {
    return children.slice(0, sliceThreshold);
  }, [children, sliceThreshold]);

  const handleLoadMore = useCallback(() => {
    setSliceThreshold((prevSliceThreshold) => prevSliceThreshold + 10);
  }, []);

  const handleLoadLess = useCallback(() => {
    setSliceThreshold(() => 0);
  }, []);

  return (
    <>
      {projects.map((project) => project)}
      <div className="text-center p-3">
        {sliceThreshold < children.length ? (
          <button
            className="bg-gray-700 dark:bg-gray-300 text-gray-300 dark:text-gray-700 rounded-full px-2 py-1 text-xs font-semibold m-1"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        ) : (
          <button
            className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
            onClick={handleLoadLess}
          >
            Load Less
          </button>
        )}
      </div>
    </>
  );
};

export default ProjectsClient;

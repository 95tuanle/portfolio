const LeetCodeSub = ({ leetCodeUserProfileSubmissionNumber }: any) => (
  <>
    <div className="text-lg font-semibold">
      {leetCodeUserProfileSubmissionNumber['difficulty']}
    </div>
    <div className="flex flex-wrap">
      <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1">
        Count: {leetCodeUserProfileSubmissionNumber['count']}
      </div>
      <div className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1">
        Submissions: {leetCodeUserProfileSubmissionNumber['submissions']}
      </div>
    </div>
  </>
);

export default LeetCodeSub;

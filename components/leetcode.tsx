import LeetCodeSub from '@/components/leetcode-sub';

const LeetCode = ({
  leetCodeUserProfileSubmissionNumbers,
}: {
  leetCodeUserProfileSubmissionNumbers: any;
}) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">LeetCode</div>
    {leetCodeUserProfileSubmissionNumbers.map(
      (leetCodeUserProfileSubmissionNumber: any, index: number) => (
        <LeetCodeSub
          key={index}
          leetCodeUserProfileSubmissionNumber={
            leetCodeUserProfileSubmissionNumber
          }
        />
      ),
    )}
  </>
);

export default LeetCode;

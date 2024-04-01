import LeetCodeSub from '@/components/leetcode.sub';
import SubWrapper from '@/components/sub-wrapper';

const LeetCode = ({ leetCodeUserProfileSubmissionNumbers }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">LeetCode</div>
    {leetCodeUserProfileSubmissionNumbers.map(
      (leetCodeUserProfileSubmissionNumber: any, index: number) => (
        <SubWrapper key={index}>
          <LeetCodeSub
            leetCodeUserProfileSubmissionNumber={
              leetCodeUserProfileSubmissionNumber
            }
          />
        </SubWrapper>
      ),
    )}
  </>
);

export default LeetCode;

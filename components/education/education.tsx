import EducationSub from '@/components/education/education.sub';
import SubWrapper from '@/components/sub-wrapper';

const Education = ({ education }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Education</div>
    {education.map((educationSub: any, index: number) => (
      <SubWrapper key={index}>
        <EducationSub educationSub={educationSub} />
      </SubWrapper>
    ))}
  </>
);

export default Education;

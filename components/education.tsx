import EducationSub from '@/components/education.sub';

const Education = ({ education }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Education</div>
    {education.map((educationSub: any, index: number) => (
      <EducationSub educationSub={educationSub} key={index} />
    ))}
  </>
);

export default Education;

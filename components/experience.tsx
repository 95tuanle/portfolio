import ExperienceSub from '@/components/experience.sub';
import SubWrapper from '@/components/sub-wrapper';

const Experience = ({ experience }: any) => (
  <>
    <div className="text-2xl font-semibold p-3 mx-3 mt-6">Experience</div>
    {experience.map((experienceSub: any, index: number) => (
      <SubWrapper key={index}>
        <ExperienceSub experienceSub={experienceSub} />
      </SubWrapper>
    ))}
  </>
);

export default Experience;

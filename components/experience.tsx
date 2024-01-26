import ExperienceSub from "@/components/experience-sub";

const Experience = ({experience}: any) => <>
  <div className="text-2xl font-semibold p-3 m-3">Experience</div>
  {experience.map((experienceSub: any, index: number) => <ExperienceSub experienceSub={experienceSub} key={index}/>)}
</>;

export default Experience;
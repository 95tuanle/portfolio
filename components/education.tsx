import EducationSub from "@/components/education-sub";

const Education = ({education}: any) => <>
  <div className="text-2xl font-semibold p-3 m-3">Education</div>
  {education.map((educationSub: any, index: number) => <EducationSub educationSub={educationSub} key={index}/>)}
</>;

export default Education;
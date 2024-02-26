import Responsibility from '@/components/responsibility';

const ExperienceSub = ({ experienceSub }: any) => (
  <div className="p-3 ml-6">
    <div className="text-lg font-semibold">{experienceSub['position']}</div>
    <a
      className="hover:underline"
      href={experienceSub['companyUrl']}
      target={'_blank'}
      aria-label={experienceSub['company']}
    >
      {experienceSub['company']}
    </a>
    <div className="text-gray-300">{experienceSub['duration']}</div>
    <div className="text-gray-300">{experienceSub['location']}</div>
    {experienceSub['responsibilities'].map(
      (responsibility: any, index: number) => (
        <Responsibility responsibility={responsibility} key={index} />
      ),
    )}
  </div>
);

export default ExperienceSub;

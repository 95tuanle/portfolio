import Responsibility from '@/components/experience/responsibility';

const ExperienceSub = ({ experienceSub }: any) => (
  <>
    <div className="text-lg font-semibold">{experienceSub['position']}</div>
    <a
      className="hover:underline"
      href={experienceSub['companyUrl']}
      target={'_blank'}
      aria-label={experienceSub['company']}
      title={experienceSub['company']}
    >
      {experienceSub['company']}
    </a>
    <div className="text-gray-700 dark:text-gray-300">
      {experienceSub['duration']}
    </div>
    <div className="text-gray-700 dark:text-gray-300">
      {experienceSub['location']}
    </div>
    {experienceSub['responsibilities'].map(
      (responsibility: any, index: number) => (
        <Responsibility responsibility={responsibility} key={index} />
      ),
    )}
  </>
);

export default ExperienceSub;

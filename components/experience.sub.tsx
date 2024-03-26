import Responsibility from '@/components/responsibility';

const ExperienceSub = ({ experienceSub }: any) => (
  <div className="p-3 mx-6 my-3 border border-gray-300 dark:border-gray-700 rounded-lg">
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
  </div>
);

export default ExperienceSub;

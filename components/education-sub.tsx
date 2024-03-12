const EducationSub = ({ educationSub }: any) => (
  <div className="p-3 ml-6">
    <a
      className="text-lg font-semibold hover:underline"
      href={educationSub['institutionUrl']}
      target={'_blank'}
      aria-label={educationSub['institution']}
      title={educationSub['institution']}
    >
      {educationSub['institution']}
    </a>
    <div>{educationSub['degree']}</div>
    <div className="text-gray-700 dark:text-gray-300">
      {educationSub['duration']}
    </div>
    <div className="text-gray-700 dark:text-gray-300">
      {educationSub['location']}
    </div>
  </div>
);

export default EducationSub;

const Languages = ({ languages }: any) => (
  <div className="flex flex-wrap">
    {Object.keys(languages).map((language) => (
      <div
        key={language}
        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
      >
        {language}
      </div>
    ))}
  </div>
);

export default Languages;

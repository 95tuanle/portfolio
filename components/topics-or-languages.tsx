const TopicsOrLanguages = ({ topicsOrLanguages }: any) => (
  <div className="flex flex-wrap">
    {topicsOrLanguages.map((topicOrLanguage: any) => (
      <div
        key={topicOrLanguage}
        className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1 text-xs font-semibold m-1"
      >
        {topicOrLanguage}
      </div>
    ))}
  </div>
);

export default TopicsOrLanguages;

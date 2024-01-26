const Project = ({gitHubUserRepo}: any) => <div className="p-3 m-3">
  <a className="text-lg font-semibold mb hover:underline" href={gitHubUserRepo["html_url"]} target={"_blank"}
     aria-label={gitHubUserRepo["name"]}>{gitHubUserRepo["name"]}</a>
  <div className="text-gray-300 mb-3">{gitHubUserRepo["description"]}</div>
  <div className="flex items-center space-x-3">
    <div className="flex items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-star"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.192-3.047-2.97a.75.75 0 0 1 .416-1.28l4.21-.611 1.882-3.816A.75.75 0 0 1 8 0z"
        />
      </svg>
      <span className="text-gray-300">{gitHubUserRepo["stargazers_count"]}</span>
    </div>
    <div className="flex items-center space-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-eye"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM2 8a6 6 0 0 1 9.464-5H8v10h3.464A6 6 0 0 1 2 8z"
        />
        <path
          fillRule="evenodd"
          d="M7.5 3.5a.5.5 0 0 1 .5.5V8a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h3z"
        />
      </svg>
      <span className="text-gray-300">{gitHubUserRepo["watchers_count"]}</span>
    </div>
  </div>
</div>;

export default Project;
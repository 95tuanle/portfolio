const GitHubUserRepo = ({gitHubUserRepo}: any) => <div className="card">
  <div className="card-header">
    <h4 className="card-title">{gitHubUserRepo["name"]}</h4>
  </div>
  <div className="card-body">
    <p className="card-text">{gitHubUserRepo["description"]}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Language: {gitHubUserRepo["language"]}</li>
    <li className="list-group-item">Forks: {gitHubUserRepo["forks_count"]}</li>
    <li className="list-group-item">Watchers: {gitHubUserRepo["watchers_count"]}</li>
    <li className="list-group-item">Stars: {gitHubUserRepo["stargazers_count"]}</li>
  </ul>
  <div className="card-body">
    <a href={gitHubUserRepo["html_url"]} className="card-link">GitHub</a>
  </div>
</div>;

export default GitHubUserRepo;
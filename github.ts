import {request} from "@octokit/request";

const requestWithAuth = request.defaults({
  headers: {authorization: `token ${process.env.GITHUB_TOKEN}`}
});

export const getGitHubUser = async () => {
  try {
    const {data} = await requestWithAuth('GET /user');
    return data;
  } catch (error) {
    throw error;
  }
};

export const getGitHubUserRepos = async () => {
  try {
    const {data} = await requestWithAuth('GET /user/repos', {
      affiliation: 'owner', sort: 'updated', per_page: 333
    });
    return data;
  } catch (error) {
    throw error;
  }
};
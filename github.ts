import {Octokit} from "@octokit/core";

const octokit = new Octokit({auth: process.env.GITHUB_TOKEN});

export const getGitHubUser = async () => {
  try {
    const gitHubUser = await octokit.request('GET /user');
    return gitHubUser.data;
  } catch (error) {
    throw error;
  }
};

export const getGitHubUserRepos = async () => {
  try {
    const gitHubUserRepos = await octokit.request('GET /user/repos', {
      affiliation: 'owner', sort: 'updated', per_page: 333,
    });
    return gitHubUserRepos.data;
  } catch (error) {
    throw error;
  }
};
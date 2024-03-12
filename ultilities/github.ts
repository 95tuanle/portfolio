import { request } from '@octokit/request';
import { cache } from 'react';

const requestWithAuth = request.defaults({
  headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
});

export const getGitHubUser = cache(async () => {
  try {
    const { data } = await requestWithAuth('GET /user');
    return data;
  } catch (error) {
    throw error;
  }
});

export const getGitHubUserRepos = cache(async () => {
  try {
    const { data } = await requestWithAuth('GET /user/repos', {
      affiliation: 'owner',
      sort: 'pushed',
      per_page: 333,
    });
    return data;
  } catch (error) {
    throw error;
  }
});

export const getGitHubUserRepoReadmeFileContent = cache(
  async (owner: any, repo: any) => {
    try {
      const { data } = await requestWithAuth(
        'GET /repos/{owner}/{repo}/readme',
        {
          owner: owner,
          repo: repo,
          mediaType: { format: 'raw' },
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const getGitHubUserRepoLanguages = cache(
  async (owner: any, repo: any) => {
    try {
      const { data } = await requestWithAuth(
        'GET /repos/{owner}/{repo}/languages',
        {
          owner: owner,
          repo: repo,
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
);

import {request} from "@octokit/request";
import {cache} from "react"

const requestWithAuth = request.defaults({headers: {authorization: `token ${process.env.GITHUB_TOKEN}`}});

export const getGitHubUser = cache(async () => {
  try {
    const {data} = await requestWithAuth("GET /user");
    return data;
  } catch (error) {
    throw error;
  }
});

export const getGitHubUserRepos = cache(async () => {
  try {
    const {data} = await requestWithAuth("GET /user/repos", {affiliation: "owner", sort: "pushed", per_page: 333});
    return data;
  } catch (error) {
    throw error;
  }
});

export const getGitHubUserRepoReadmeFileContent = cache(async (login: any, name: any) => {
  try {
    const {data} = await requestWithAuth("GET /repos/{owner}/{repo}/readme", {
      owner: login, repo: name, mediaType: {format: "raw"}
    });
    return data;
  } catch (error) {
    throw error;
  }
});
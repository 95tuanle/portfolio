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
    const {data} = await requestWithAuth("GET /user/repos", {affiliation: "owner", sort: "updated", per_page: 333});
    return data;
  } catch (error) {
    throw error;
  }
});

export const getGitHubUserRepoFileContent = cache(async (login: any, name: any, path: any,) => {
  try {
    const {data} = await requestWithAuth("GET /repos/{owner}/{repo}/contents/{path}", {
      owner: login, repo: name, path: path, mediaType: {format: "raw"}
    });
    return data;
  } catch (error) {
    throw error;
  }
});
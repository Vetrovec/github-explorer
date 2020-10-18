import { createModel } from "@rematch/core";
import { fetchUserRepos } from "api/github";

export default createModel()({
  name: "repos",
  state: {
    error: null,
    repos: null,
  },
  reducers: {
    SET_ERROR: (state, error) => ({
      ...state,
      error,
    }),
    SET_REPOS: (state, repos) => ({
      ...state,
      repos,
    }),
  },
  effects: (dispatch) => ({
    async fetchRepos(username) {
      try {
        const response = await fetchUserRepos(username);
        const repos = response.map((repo) => ({
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          description: repo.description,
          stars: repo.stargazers_count,
        }));
        dispatch.repos.SET_REPOS(repos);
        dispatch.repos.SET_ERROR(null);
      } catch (e) {
        let errorMessage = "containers.repos.errors.default";
        if (e.message === "Not Found") {
          errorMessage = "containers.repos.errors.notfound";
        }
        dispatch.repos.SET_REPOS(null);
        dispatch.repos.SET_ERROR(errorMessage);
      }
    },
  }),
});

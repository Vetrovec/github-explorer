import { createModel } from "@rematch/core";
import { fetchRepo } from "api/github";

export default createModel()({
  name: "details",
  state: {
    error: null,
    details: null,
  },
  reducers: {
    SET_ERROR: (state, error) => ({
      ...state,
      error,
    }),
    SET_DETAILS: (state, details) => ({
      ...state,
      details,
    }),
  },
  effects: (dispatch) => ({
    async fetchDetails({ username, repo }) {
      try {
        const response = await fetchRepo(username, repo);
        const details = {
          id: response.id,
          name: response.name,
          description: response.description,
          language: response.language,
          license: (response.license && response.license.name) || null,
          fork: response.fork,
          parent: (response.parent && response.parent.full_name) || null,
        };
        dispatch.details.SET_DETAILS(details);
        dispatch.details.SET_ERROR(null);
      } catch (e) {
        let errorMessage = "containers.details.errors.default";
        if (e.message === "Not Found") {
          errorMessage = "containers.details.errors.notfound";
        }
        dispatch.details.SET_DETAILS(null);
        dispatch.details.SET_ERROR(errorMessage);
      }
    },
  }),
});

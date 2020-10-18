import { createModel } from "@rematch/core";
import { fetchUser } from "api/github";

export default createModel()({
  name: "profile",
  state: {
    error: null,
    profile: null,
  },
  reducers: {
    SET_ERROR: (state, error) => ({
      ...state,
      error,
    }),
    SET_PROFILE: (state, profile) => ({
      ...state,
      profile,
    }),
  },
  effects: (dispatch) => ({
    async fetchProfile(username) {
      try {
        const response = await fetchUser(username);
        const profile = {
          login: response.login,
          name: response.name,
          bio: response.bio,
          avatarUrl: response.avatar_url,
        };
        dispatch.profile.SET_PROFILE(profile);
        dispatch.profile.SET_ERROR(null);
      } catch (e) {
        let errorMessage = "containers.profile.errors.default";
        if (e.message === "Not Found") {
          errorMessage = "containers.profile.errors.notfound";
        }
        dispatch.profile.SET_PROFILE(null);
        dispatch.profile.SET_ERROR(errorMessage);
      }
    },
  }),
});

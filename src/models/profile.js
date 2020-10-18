import { createModel } from "@rematch/core";

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
});

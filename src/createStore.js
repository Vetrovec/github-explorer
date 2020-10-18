import * as Rematch from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import immerPlugin from "@rematch/immer";
import selectPlugin from "@rematch/select";
import models from "models";

export default function createStore() {
  const plugins = [immerPlugin(), loadingPlugin(), selectPlugin()];
  const store = Rematch.init({
    models,
    plugins,
  });
  return store;
}

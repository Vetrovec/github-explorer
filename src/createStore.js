import * as Rematch from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import immerPlugin from "@rematch/immer";
import selectPlugin from "@rematch/select";

export default function createStore() {
  const models = [];
  const plugins = [immerPlugin(), loadingPlugin(), selectPlugin()];
  const store = Rematch.init({
    models,
    plugins,
  });
  return store;
}

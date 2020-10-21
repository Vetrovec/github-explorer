import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Router } from "@reach/router";
import createStore from "./createStore";
import Translations from "./translations";
import Details from "containers/Details";
import Profile from "containers/Profile";
import Repos from "containers/Repos";

const store = createStore();

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <IntlProvider messages={Translations.english} locale="en">
          <Helmet
            titleTemplate="GitHub Explorer - %s"
            defaultTitle="GitHub Explorer"
          />
          <Router style={{ height: "100%", outline: "none" }}>
            <Profile default />
            <Repos path="/repos/:username" />
            <Details path="/details/:username" />
          </Router>
        </IntlProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default App;

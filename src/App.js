import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Router } from "@reach/router";
import createStore from "./createStore";
import Translations from "./translations";
import Profile from "./containers/Profile";

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
          <Router>
            <Profile default />
          </Router>
        </IntlProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default App;

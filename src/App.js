import "./App.css";
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import { Router } from "@reach/router";
import createStore from "./createStore";
import Translations from "./translations";

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
          <div className="App">
            <Router />
          </div>
        </IntlProvider>
      </Provider>
    </HelmetProvider>
  );
}

export default App;

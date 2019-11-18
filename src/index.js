import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import configureStore from "./Redux/store";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import "./Styles/global.scss";
import {
  COIN_BUCKET_PRIMARY_COLOR,
  COIN_BUCKET_SECONDARY_COLOR
} from "./constants";

const store = configureStore();

const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: { main: COIN_BUCKET_PRIMARY_COLOR },
    secondary: { main: COIN_BUCKET_SECONDARY_COLOR }
  },
  typography: {
    fontFamily: ["Poppins"].join(",")
  }
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Route path="/" component={App} />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();

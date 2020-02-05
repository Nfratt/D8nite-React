import React from "react";
import {render} from "react-dom";

import { Provider } from 'react-redux';

import store from './redux/store';
// import * as serviceWorker from './serviceWorker';

import App from "./App";


// const renderApp = ReactDOM.render(<App />, document.getElementById("root"));

const renderApp = () => render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


/**
 * Setting up hot module reloading for our components
 */
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

renderApp()
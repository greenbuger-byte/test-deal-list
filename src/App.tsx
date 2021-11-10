import React from 'react';

import GlobalStyle from "./theme/global";
import { Provider } from "react-redux";

import Routers from "./routers";
import server from "./mock-server/server";
import store from "./store";

function App() {
  server();
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routers />
    </Provider>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";

import App from "./app/App";
// normalize.css
import "./index.css";
// Bootstrap icons (NOT Bootstrap!)
import "bootstrap-icons/font/bootstrap-icons.css";

/**
 * Typescript notes for Redux
 * - store configuration: app/store.ts, app/hook.ts
 * - using useSelctor Hook: App.tsx
 * - using useDispatch hook & thunks: Auth/Login/Login.tsx, Auth/Login/loginThunk.ts
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

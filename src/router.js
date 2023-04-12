import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Pages from "./pages";
import Todos from "./pages/todos";
import Login from "./pages/login";
import Welcome from "./pages/welcome";

export const DispatchCtx = React.createContext(null);

function Router() {
  const dispatch = useDispatch();
  return (
    <>
      <DispatchCtx.Provider value={dispatch}>
        <Routes>
          <Route
            exact
            path="/login"
            element={<Pages pages={<Login />} auth={false} />}
          />
          <Route
            path="/todo/:unique"
            element={<Pages pages={<Todos />} auth={true} />}
          />
          <Route path="/" element={<Pages pages={<Welcome />} auth={true} />} />
        </Routes>
      </DispatchCtx.Provider>
    </>
  );
}

export default Router;

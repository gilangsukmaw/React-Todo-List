import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Pages from "./pages";
import Todos from "./pages/todos";
// import Welcome from "./pages/welcome";

export const DispatchCtx = React.createContext(null);

function Router() {
  const dispatch = useDispatch();
  return (
    <>
      <DispatchCtx.Provider value={dispatch}>
        <Routes>
          {/* <Route exact path="/login" element={<LoginPage />} /> */}
          <Route
            exact
            path="/"
            element={<Pages pages={<Todos />} auth={false} />}
          />
        </Routes>
      </DispatchCtx.Provider>
    </>
  );
}

export default Router;

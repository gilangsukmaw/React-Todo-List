import { useContext, useEffect, useState } from "react";
import { DispatchCtx } from "../router";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Navbar from "../components/navbar";
import { getFromLocalStorate } from "../helper/localStorage";

function Pages({ pages, auth }) {
  const dayjs = require("dayjs");
  var utc = require("dayjs/plugin/utc");
  dayjs.extend(utc);

  const dispatch = useContext(DispatchCtx);
  const [allowed, setAllowed] = useState(false);
  let navigate = useNavigate();
  const loginInfo = useSelector((state) => state.authState);

  useEffect(() => {
    if (auth && loginInfo.isLoggedIn) {
      let expired = getFromLocalStorate("expiredAt");
      expired = dayjs(expired).utc().format(); // 2019-03-06T00:00:00Z
      const now = dayjs.utc().format(); // 2019-03-06T00:00:00Z

      if (now > expired) {
        navigate("/login");
        window.location.reload();
      }
    }

    if (auth && !loginInfo.isLoggedIn) {
      navigate("/login");
      window.location.reload();
    }
  }, [allowed]);

  return (
    <>
      {auth ? (
        <>
          <Navbar />
          <div>{pages}</div>
        </>
      ) : (
        <div>{pages}</div>
      )}
    </>
  );
}

export default Pages;

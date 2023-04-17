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
    let expired = getFromLocalStorate("expiredAt");
    expired = dayjs(expired).utc().format(); // 2019-03-06T00:00:00Z
    const now = dayjs.utc().format(); // 2019-03-06T00:00:00Z

    if (auth && loginInfo.isLoggedIn) {
      if (now >= expired) {
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#1f2937"
              fill-opacity="0.75"
              d="M0,224L24,202.7C48,181,96,139,144,112C192,85,240,75,288,96C336,117,384,171,432,186.7C480,203,528,181,576,149.3C624,117,672,75,720,64C768,53,816,75,864,106.7C912,139,960,181,1008,186.7C1056,192,1104,160,1152,133.3C1200,107,1248,85,1296,85.3C1344,85,1392,107,1416,117.3L1440,128L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
        </>
      ) : (
        <div>{pages}</div>
      )}
    </>
  );
}

export default Pages;

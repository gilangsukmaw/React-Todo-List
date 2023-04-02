import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Navbar from "../components/navbar";

function Pages({ pages, auth }) {
  const [allowed, setAllowed] = useState(false);
  let navigate = useNavigate();
  const loginInfo = useSelector((state) => state.authState);

  useEffect(() => {
    if (auth && !loginInfo.isLoggedIn) {
      navigate("/login");
      window.location.reload();
    } else {
      setAllowed(true);
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

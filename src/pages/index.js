import Navbar from "../components/navbar";

function Pages({ pages, auth }) {
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

import Navbar from "../components/navbar";

function Pages({ pages }) {
  return (
    <>
      <Navbar />
      <div>{pages}</div>
    </>
  );
}

export default Pages;

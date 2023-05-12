import { FC } from "react";
import "./Loader.css";

const Spinner = () => {
  return (
    <main className="main">
      <div className="loading">
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export default Spinner;

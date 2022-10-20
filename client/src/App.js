import React, { useEffect, useState } from "react";
import axios from "axios";
import Pic from "./component/Pic";
import Add from "./component/Add";

const App = () => {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    // On récupère toutes les data
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => setPics(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <h1>NFT Gallery</h1>
      <Add />
      <div className="container">
        {pics.map((p) => {
          return <Pic data={p} key={p.artist} />;
        })}
      </div>
    </>
  );
};

export default App;

import React, { useEffect } from "react";
import axios from "axios";
import Pic from "./component/Pic";
import Add from "./component/Add";
import { useDispatch, useSelector } from "react-redux";
import { setPicturesData } from "./features/pictures.slice";

const App = () => {
  const dispatch = useDispatch();
  const pics = useSelector((state) => state.pictures.pictures);

  //Récupère toute ls images
  const getPictures = () => {
    axios
      .get("http://localhost:5000/pictures")
      .then((res) => dispatch(setPicturesData(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // On récupère toutes les data
    getPictures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>NFT Gallery</h1>
      <Add getPictures={getPictures} />
      <div className="container">
        {pics?.map((p) => {
          return <Pic data={p} key={p.artist} />;
        })}
      </div>
    </>
  );
};

export default App;

import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPicture } from "../features/pictures.slice";

const Add = ({ getPictures }) => {
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");

  const dispatch = useDispatch();

  //Fonction pour ajouter une photo
  const addPic = (e) => {
    e.preventDefault();

    const data = {
      artist: artist,
      year: year,
      photo:
        "https://picsum.photos/400/" + Math.round(Math.random() * 200 + 300),
    };

    if (data.artist === "" || data.year === "") {
      alert("Attention, il manque une information");
    } else {
      axios
        .post("http://localhost:5000/pictures", data)
        .then((res) => {
          dispatch(addPicture(data));
          dispatch(getPictures);
          setArtist("");
          setYear("");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="add">
      <span className="titre-add">Enregistrer une nouvelle photo</span>
      <form onSubmit={(e) => addPic(e)} id="myform">
        <input
          type="text"
          placeholder="Artiste"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />
        <input
          type="text"
          placeholder="Année"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
        <input type="submit" value="Envoyer" onClick={addPic} />
      </form>
    </div>
  );
};

export default Add;

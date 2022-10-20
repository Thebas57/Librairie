import axios from "axios";
import React, { useState } from "react";

const Add = () => {
  const [year, setYear] = useState("");
  const [artist, setArtist] = useState("");

  //Fonction pour ajouter une photo
  const addPic = () => {
    const data = {
      artist: artist,
      year: year,
      photo:
        "https://picsum.photos/400/" + Math.round(Math.random() * 200 + 300),
    };

    axios
      .post("http://localhost:5000/pictures", data)
      .then((res) =>
        axios
          .get("http://localhost:5000/pictures")
          .then((res) => console.log("coucou"))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  };

  return (
    <div className="add">
      <span className="titre-add">Enregistrer une nouvelle photo</span>
      <div className="form">
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
      </div>
    </div>
  );
};

export default Add;

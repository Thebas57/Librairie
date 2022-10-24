import axios from "axios";
import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { editPicture } from "../features/pictures.slice";
import Delete from "./Delete";

const Pic = (data) => {
  const [updateForm, setUpdateForm] = useState(false);
  const [artist, setArtist] = useState("");

  const dispatch = useDispatch();

  //Modification de la carte
  const handleEdit = () => {
    setUpdateForm(false);

    const dataUpdate = {
      artist: artist,
      year: data.data.year,
      photo: data.data.photo,
    };

    axios
      .put("http://localhost:5000/pictures/" + data.data.id, dataUpdate)
      .then(() => dispatch(editPicture([dataUpdate.artist, data.data.id])));
  };

  return (
    <div className="pics">
      <div className="header">
        <img src={data.data.photo} alt="header-pic" />
      </div>
      <div className="info">
        <div>
          {updateForm ? (
            <>
              <input
                type="text"
                name="artist"
                defaultValue={data.data.artist}
                onChange={(e) => setArtist(e.target.value)}
              />
              <input type="button" value="Valider" onClick={handleEdit} />
            </>
          ) : (
            <>
              <span className="artiste">{data.data.artist}</span>
              <br />
            </>
          )}
          <span className="date">{data.data.year}</span>
        </div>
        <div className="icons">
          <span>
            <FaRegEdit onClick={() => setUpdateForm(!updateForm)} />
          </span>
          <Delete id={data.data.id} />
        </div>
      </div>
    </div>
  );
};

export default Pic;

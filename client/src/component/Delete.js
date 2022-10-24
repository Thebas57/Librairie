import axios from "axios";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePicture } from "../features/pictures.slice";

const Delete = ({ id }) => {
  const dispatch = useDispatch();

  //Permets de supprimer une card
  const deletePic = () => {
    axios
      .delete("http://localhost:5000/pictures/" + id)
      .then((res) => dispatch(deletePicture(id)))
      .catch((err) => console.log(err));
  };

  return (
    <span onClick={deletePic}>
      <FaTrash />
    </span>
  );
};

export default Delete;

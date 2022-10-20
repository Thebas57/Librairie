import axios from "axios";
import React from "react";
import { FaTrash } from "react-icons/fa";

const Delete = ({ id }) => {
  //Permets de supprimer une card
  const deletePic = () => {
    axios
      .delete("http://localhost:5000/pictures/"+ id)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <span onClick={deletePic}>
      <FaTrash />
    </span>
  );
};

export default Delete;

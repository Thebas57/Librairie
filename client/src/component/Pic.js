import React from "react";
import { FaRegEdit } from "react-icons/fa";
import Delete from "./Delete";

const Pic = (data) => {
  return (
    <div className="pics">
      <div className="header">
        <img src={data.data.photo} alt="header-pic" />
      </div>
      <div className="info">
        <div>
          <span className="artiste">{data.data.artist}</span> <br />
          <span className="date">{data.data.year}</span>
        </div>
        <div className="icons">
          <span>
            <FaRegEdit />
          </span>
          <Delete id={data.data.id} />
        </div>
      </div>
    </div>
  );
};

export default Pic;

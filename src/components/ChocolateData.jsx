/* eslint-disable react/prop-types */
import React from "react";
import { BiPencil } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const ChocolateData = ({ chocolate,handleRemoveChocolate }) => {
  const { _id, photo, name, country, category } = chocolate;
  return (
    <tr>
      <th>
        <div className="avatar">
          <div className="w-20 rounded-xl">
            <img src={photo} />
          </div>
        </div>
      </th>
      <td>
        <div className="font-bold">{name}</div>
      </td>
      <td>{country}</td>
      <td>{category}</td>
      <th>
        <div className="flex items-center gap-2">
          <button onClick={() => handleRemoveChocolate(_id)} className=" px-3 py-3 rounded-md bg-gray-300 border-0 text-lg text-yellow-900">
            <RxCross2></RxCross2>
          </button>
          <Link to={`/updateChocolate/${_id}`}>
          <button className=" px-3 py-3 rounded-md bg-gray-300 border-0 text-lg text-yellow-900">
            <BiPencil></BiPencil>
          </button>
          </Link>
        </div>
      </th>
    </tr>
  );
};

export default ChocolateData;

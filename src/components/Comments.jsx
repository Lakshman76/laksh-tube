import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const Comments = ({ data }) => {
  const { name, description, replies } = data;
  return (
    <div className="p-2 my-2 flex gap-3 items-center bg-gray-100 rounded-lg shadow-md">
      <FaRegCircleUser className="w-10 h-10" />
      <div className="">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Comments;

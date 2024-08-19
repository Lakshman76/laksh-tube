import React from "react";
import { Link } from "react-router-dom";
import getVideoBySearch from "../utils/getVideoBySearch";
import { useDispatch } from "react-redux";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/search?q=${name}`}>
        <button
          onClick={() => {
            getVideoBySearch(name, dispatch);
          }}
          className="px-4 py-1 bg-gray-300 m-2 rounded-lg"
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;

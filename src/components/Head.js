import React, { useEffect, useState } from "react";
import logo from "../assets/images/LakshTube-logo.png";
import {
  RxHamburgerMenu,
  PiMagnifyingGlass,
  MdNotificationsNone,
  FaRegCircleUser,
} from "../utils/ReactIcons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidenavSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestion(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    // console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    // console.log(jsonData);
    setSuggestions(jsonData);
  };

  return (
    <div className="w-full bg-white grid grid-flow-col p-4 shadow-lg z-10 fixed">
      <div className="flex items-center gap-8 col-span-1">
        <RxHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="w-8 h-6 cursor-pointer"
        />
        <a href="/">
          <img className="h-10" src={logo} alt="youtube-logo" />
        </a>
      </div>
      <div className="flex flex-col col-span-9">
        <div className="w-full flex justify-center items-center">
          <input
            className="w-1/2 px-8 py-2 border border-gray-400 rounded-l-full outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="p-2 border border-gray-400 rounded-r-full bg-gray-200">
            <PiMagnifyingGlass className="w-8 h-6" />
          </button>
        </div>
        <div className="fixed mt-12 ml-[17rem] p-2 w-[38rem] bg-white border border-gray-100 shadow-lg rounded-lg ">
          <ul className="max-h-96 overflow-y-scroll">
            {suggestions.map((suggestion) => {
              // console.log(suggestion.show.name);
              return (
                <li className="flex gap-2 items-center p-2 hover:bg-slate-200">
                  <PiMagnifyingGlass /> {suggestion.show.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4 col-span-2">
        <MdNotificationsNone className="w-8 h-8" />
        <FaRegCircleUser className="w-8 h-7" />
      </div>
    </div>
  );
};

export default Head;

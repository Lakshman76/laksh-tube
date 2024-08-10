import React, { useEffect, useState } from "react";
import logo from "../assets/images/LakshTube-logo.png";
import {
  RxHamburgerMenu,
  PiMagnifyingGlass,
  MdNotificationsNone,
  FaRegCircleUser,
} from "../utils/ReactIcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/sidenavSlice";
import getSearchSuggestion from "../utils/getSearchSuggestion";
import getVideoBySearch from "../utils/getVideoBySearch";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion(searchQuery, setSuggestions, dispatch);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="w-full bg-white grid grid-flow-col p-4 shadow-lg z-10 fixed">
      <div className="flex items-center gap-8 col-span-1">
        <RxHamburgerMenu
          onClick={() => toggleMenuHandler()}
          className="w-8 h-6 cursor-pointer"
        />
        <Link to="/">
          <img className="h-10" src={logo} alt="youtube-logo" />
        </Link>
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
            onFocus={() => setShowSuggestion(true)}
            // onBlur={() => setShowSuggestion(false)}
          />
          <Link to={`/search?q=${searchQuery}`}>
            <button
              className="p-2 border border-gray-400 rounded-r-full bg-gray-200"
              onClick={() => {
                setSearchQuery(searchQuery);
                setShowSuggestion(false);
                getVideoBySearch(searchQuery, dispatch);
              }}
            >
              <PiMagnifyingGlass className="w-8 h-6" />
            </button>
          </Link>
        </div>
        {showSuggestion && (
          <div className="fixed mt-12 ml-[17rem] p-2 w-[38rem] bg-white border border-gray-100 shadow-lg rounded-lg ">
            <ul className="max-h-96 overflow-y-scroll">
              {suggestions[1].map((suggestion) => {
                return (
                  <Link to={`/search?q=${searchQuery}`}>
                    <li
                      className="flex gap-2 items-center p-2 hover:bg-slate-200 cursor-pointer"
                      key={suggestion}
                      onClick={() => {
                        setSearchQuery(suggestion);
                        setShowSuggestion(false);
                        getVideoBySearch(suggestion, dispatch);
                      }}
                    >
                      <PiMagnifyingGlass /> {suggestion}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-4 col-span-2">
        <MdNotificationsNone className="w-8 h-8" />
        <FaRegCircleUser className="w-8 h-7" />
      </div>
    </div>
  );
};

export default Head;

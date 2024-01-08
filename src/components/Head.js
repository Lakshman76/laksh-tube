import React from "react";
import logo from "../assets/images/LakshTube-logo.png";
import {
  RxHamburgerMenu,
  PiMagnifyingGlass,
  MdNotificationsNone,
  FaRegCircleUser,
} from "../utils/ReactIcons";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidenavSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
      <div className="flex justify-center items-center col-span-8">
        <input
          className="w-1/2 px-6 py-2 border border-gray-400 rounded-l-full outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="p-2 border border-gray-400 rounded-r-full bg-gray-200">
          <PiMagnifyingGlass className="w-8 h-6" />
        </button>
      </div>
      <div className="flex justify-center items-center gap-4 col-span-2">
        <MdNotificationsNone className="w-8 h-8" />
        <FaRegCircleUser className="w-8 h-7" />
      </div>
    </div>
  );
};

export default Head;

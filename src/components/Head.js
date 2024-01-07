import React from "react";
import {
  RxHamburgerMenu,
  PiMagnifyingGlass,
  MdNotificationsNone,
  FaRegCircleUser,
} from "../utils/ReactIcons";
import logo from "../assets/images/laksh-tube.png";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex items-center gap-8 col-span-1">
        <RxHamburgerMenu className="w-8 h-6" />
        <img className="h-10" src={logo} alt="youtube-logo" />
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

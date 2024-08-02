import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.sidenav.isMenuOpen);

  // Early return
  if (!isMenuOpen) return null;

  return (
    <div className="shadow-lg w-52 mt-16 ">
      <div className="m-5">
        <h1 className="font-medium p-1">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="font-medium p-1">
          <Link to="/shorts">Shorts</Link>
        </h1>
        <h1 className="font-medium p-1">
          <a href="/">Subscriptions</a>
        </h1>
      </div>
      <div className="m-5">
        <h1 className="font-bold">YOU </h1>
        <ul>
          <li className="p-1">Your Channel</li>
          <li className="p-1">History</li>
          <li className="p-1">Your Videos</li>
          <li className="p-1">Watch later</li>
          <li className="p-1">Playlist</li>
        </ul>
      </div>
      <div className="m-5">
        <h1 className="font-bold">Subscriptions</h1>
        <ul>
          <li className="p-1">Music</li>
          <li className="p-1">Sports</li>
          <li className="p-1">Gaming</li>
          <li className="p-1">Movies</li>
          <li className="p-1">Entertainment</li>
        </ul>
      </div>
      <div className="m-5">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li className="p-1">Trending</li>
          <li className="p-1">Shopping</li>
          <li className="p-1">News</li>
          <li className="p-1">Learning</li>
          <li className="p-1">Podcasts</li>
          <li className="p-1">Fashion & Beauty</li>
        </ul>
      </div>
      <div className="m-5">
        <h1 className="font-bold">More from YouTube</h1>
        <ul>
          <li className="p-1">YouTube Premium</li>
          <li className="p-1">YouTube Studio</li>
          <li className="p-1">YouTube Music</li>
          <li className="p-1">YouTube Kids</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

type Props = {};

const sidebar = (props: Props) => {
  return (
    <div className="bg-success p-4 min-vh-100 sidebar ">
      <div className="m-2 my-4 tarang-1">
        <span className=" fs-1 tarang">Musify</span>
      </div>
      <div className="list-group list-group-flush">
        <a className="list-group-item py-2 links">
          <Link to="/">
            <span className="fs-5 anchor">Home</span>
          </Link>
        </a>
        <a className="list-group-item py-2 links">
          <Link to="/playlist">
            <span className="fs-5 anchor">Playlist</span>
          </Link>
        </a>
        <a className="list-group-item py-2 links">
          <Link to="/favourite">
            <span className="fs-5 anchor">Favourite</span>
          </Link>
        </a>
      </div>
    </div>
  );
};

export default sidebar;

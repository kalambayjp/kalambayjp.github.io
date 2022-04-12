import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";

import "./index.scss";

const Layout = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">
          <span className="top-tag-html">&lt;html&gt;</span>
          <br />
          <span className="top-tag-body">&lt;body&gt;</span>
        </span>
        <Outlet />
        <span className="tags bottom-tags">
          <span className="bottom-tag-html">&lt;/html&gt;</span>
          <br />
          <span className="bottom-tag-body">&lt;/body&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;

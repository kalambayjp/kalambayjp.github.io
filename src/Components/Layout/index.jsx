import { Outlet } from "react-router-dom";
import Sidebar from "../SideBar";
import "./index.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />

        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/body&lt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;

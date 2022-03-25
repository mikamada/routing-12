import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData, additionalData } from "./SidebarData";

// ini untuk memanggil components yang sama tapi render berbeda tergantung kondisi
const Navbar = ({ isAboutPage = false, ...props }) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  const navActive = () => {
    setActived(!actived);
  };

  return (
    <div>
      <div className='navbar'>
        <button className='btn-menu' onClick={showSidebar}>
          <div className='line satu'></div>
          <div className='line dua'></div>
          <div className='line tiga'></div>
        </button>
      </div>
      <div className={sidebar ? "bar-menu active" : "bar-menu"}>
        <ul className='sidebar-items'>
          <li>
            <Link to='#' className='close-sidebar'>
              <AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {isAboutPage
            ? SidebarData.concat(additionalData).map((item, index) => (
                <LinkItem item={item} key={index} />
              ))
            : SidebarData.map((item, index) => {
                return (
                  // key selalu berada di component paling luar
                  <LinkItem item={item} key={index} />
                );
              })}
        </ul>
      </div>
    </div>
  );
};

const LinkItem = ({
  // ini artinya default value
  item = { cName: "", path: "", title: "" },
  ...props
}) => (
  <li className={item.cName}>
    <Link to={item.path} className='nav-text'>
      {item.title}
    </Link>
  </li>
);

export default Navbar;

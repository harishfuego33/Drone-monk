import Dropdown from "./Dropdown";
import React, { useState } from "react";

const MenuItems = ({ items, depthLevel, setInputOne }) => {
  const [dropdown, setDropDown] = useState(false);
  const onMouseEnter = () => {
    setDropDown(true);
  };
  const onMouseToggle = () => {
    setDropDown((pre) => !pre);
  };

  return (
    <li
      className="menu-items"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseToggle}
      style={{ position: "relative" }}
    >
      {items.submenu ? (
        <>
          <button
            className="menu-title"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            // onClick={() => setInputOne(items.title)}
          >
            {items.title}
            {depthLevel > 0 ? <span>&#x25B6;</span> : null}
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            setInputOne={setInputOne}
          />
        </>
      ) : (
        <ul className="menu-title" onClick={() => setInputOne(items.title)}>
          {items.title}
        </ul>
      )}
    </li>
  );
};
export default MenuItems;

import React from "react";
import MenuItems from "./MenuItems";
const Dropdown = ({
  submenus,
  dropdown,
  depthLevel,
  setInputOne,
  setActiveMenu,
}) => {
  depthLevel = depthLevel + 1;
  const dropDownClass = depthLevel > 0 ? "dropdown-submenu" : " ";
  const alignClass = depthLevel > 0 ? "right-align" : "";
  return (
    <ul className={`dropdown ${dropDownClass} ${dropdown ? "show" : " "}`}>
      {submenus.map((item, index) => (
        <MenuItems
          key={index}
          className="menu-title"
          depthLevel={depthLevel}
          items={item}
          setInputOne={setInputOne}
          onClick={() => setInputOne(item.title)}
          setActiveMenu={setActiveMenu}
        >
          {item.title}
        </MenuItems>
      ))}
    </ul>
  );
};
export default Dropdown;

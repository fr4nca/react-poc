import React from "react";

import { useSelector } from "react-redux";

import { Sidebar, Menu } from "./styles";

const menuItems = ["Menu1", "Menu2", "Menu3", "Menu4"];

const Aside: React.FC = (): React.ReactElement => {
  const user = useSelector(({ user }: any) => user.user);

  return (
    <Sidebar>
      <Menu>
        {menuItems.map(item => (
          <li style={{ padding: 15 + "px" }}>
            <a href="#!" style={{ color: "#FFF", textDecoration: "none" }}>
              {item}
            </a>
          </li>
        ))}
      </Menu>
      <h1 style={{ color: "#fff" }}>{user}</h1>
    </Sidebar>
  );
};

export default Aside;

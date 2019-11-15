import React from "react";

import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

const Layout: React.FC = (props: any): React.ReactElement => {
  return (
    <>
      <Header />
      <Aside />
      <Main>{props.children}</Main>
    </>
  );
};

export default Layout;

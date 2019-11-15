import React from "react";
import { Content } from "./styles";

const Main: React.FC = (props: any): React.ReactElement => {
  return <Content>{props.children}</Content>;
};

export default Main;

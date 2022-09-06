import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import Menu from "../components/Menu";
import SubMenu from "../components/SubMenu";

function Main() {
  return (
    <MainDisplay>
      <Header />
      <SubMenu />
      <Menu />
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </MainDisplay>
  );
}

const MainDisplay = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

export default Main;

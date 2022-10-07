import React from "react";
import styled from "styled-components";

import Header from "../components/Header";
import MainImage from "../components/MainImage";
import Menu from "../components/Menu";
import SubMenu from "../components/SubMenu";
import Footer from "../components/Footer";

function Main() {
  return (
    <MainDisplay>
      <Header />
      <SubMenu />
      <Menu />
      <MainImage />
      <Footer />
    </MainDisplay>
  );
}

const MainDisplay = styled.div`
  width: 100%;
  height: 100%;
`;

export default Main;

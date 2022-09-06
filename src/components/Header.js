import React from "react";
import styled from "styled-components";
import leftImg from "../img/C0-Left_basic.png";
import rightImg from "../img/c0_crop_dog.png";

function Header() {
  return (
    <MainHeader>
      <HeaderImgBox>
        <HeaderImg src={leftImg}></HeaderImg>
        <HeaderImg src={rightImg}></HeaderImg>
      </HeaderImgBox>
    </MainHeader>
  );
}

const MainHeader = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid blue;
`;

const HeaderImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const HeaderImg = styled.img`
  width: 35%;
  height: 70px;
`;

export default Header;

import React from "react";
import img1 from "../img/bigImg/김.jpeg";
import img2 from "../img/bigImg/로켓직구.jpeg";
import img3 from "../img/bigImg/베스트구매타이밍.jpeg";
import img4 from "../img/bigImg/켈로그.jpeg";
import img5 from "../img/bigImg/쿠팡위크.jpeg";
import img6 from "../img/bigImg/폭탄세일.jpeg";
import styled from "styled-components";

function MainImage() {
  let arrayImages = [img1, img2, img3, img4, img5, img6];

  const randomImg = arrayImages[Math.floor(Math.random() * arrayImages.length)];

  return (
    <ImgSpace>
      <MainImageContents src={randomImg} />
    </ImgSpace>
  );
}

const ImgSpace = styled.div`
  width: 100%;
  height: 100%;
`;
const MainImageContents = styled.img`
  width: 100%;
  height: 100%;
`;

export default MainImage;

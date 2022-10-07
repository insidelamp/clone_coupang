import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu, GiCommercialAirplane } from "react-icons/gi";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import { IoRocketSharp } from "react-icons/io5";
import { BsMicFill, BsPerson } from "react-icons/bs";
import { HiOutlineSearch } from "react-icons/hi";
import { FcShop } from "react-icons/fc";

import copangLogo from "../img/logo_coupang_w350.png";

function Menu() {
  return (
    <MainMenuBox>
      <MenuLeftFocus>
        <MenuLeftFocusIcons>
          <GiHamburgerMenu />
        </MenuLeftFocusIcons>
        <div>카테고리</div>
      </MenuLeftFocus>
      <MenuRightClick>
        <MenuRightUp>
          <LogoBox>
            <Logo src={copangLogo} />
          </LogoBox>
          <MyCoupangBox>
            <SearchBoxSpace>
              <SearchBoxMenu>
                <SearchBoxMenuName>전체</SearchBoxMenuName>
                <SearchBoxMenuBtn>
                  <AiFillCaretDown />
                </SearchBoxMenuBtn>
              </SearchBoxMenu>
              <SearchBoxInput placeholder="찾고 싶은 상품을 검색해보세요!" />
              <SearchBoxBtn>
                <BsMicFill />
              </SearchBoxBtn>
              <SearchBoxBtn className="search">
                <HiOutlineSearch />
              </SearchBoxBtn>
            </SearchBoxSpace>
            <MyBtnSpace>
              <MyBtn>
                <MyBtnIcon>
                  <BsPerson />
                </MyBtnIcon>
                <MyBtnContents>마이쿠팡</MyBtnContents>
              </MyBtn>

              <MyBtn>
                <MyBtnIcon>
                  <AiOutlineShoppingCart />
                </MyBtnIcon>
                <MyBtnContents>장바구니</MyBtnContents>
              </MyBtn>
            </MyBtnSpace>
          </MyCoupangBox>
        </MenuRightUp>
        <MenuRightDown>
          <SmallMenu>
            <SmallMenuIcons1>
              <IoIosRocket />
            </SmallMenuIcons1>
            로켓배송
          </SmallMenu>
          <SmallMenu>
            <SmallMenuIcons2>
              <IoIosRocket />
            </SmallMenuIcons2>
            로켓프래시
          </SmallMenu>
          <SmallMenu>
            <SmallMenuIcons3>biz</SmallMenuIcons3>쿠팡비즈
          </SmallMenu>
          <SmallMenu>
            <SmallMenuIconBackground>
              <SmallMenuIcons4>
                <IoRocketSharp />
              </SmallMenuIcons4>
            </SmallMenuIconBackground>
            로켓직구
          </SmallMenu>
          <SmallMenu>골드박스</SmallMenu>
          <SmallMenu>와우회원할인</SmallMenu>
          <SmallMenu>이벤트/쿠폰</SmallMenu>
          <SmallMenu>
            <SmallMenuIcons5>
              <FcShop />
            </SmallMenuIcons5>
            착한상점
          </SmallMenu>
          <SmallMenu>기획전</SmallMenu>
          <SmallMenu>
            <SmallMenuIcons6>
              <GiCommercialAirplane />
            </SmallMenuIcons6>
            여행/티켓
          </SmallMenu>
        </MenuRightDown>
      </MenuRightClick>
    </MainMenuBox>
  );
}

const MainMenuBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid gray;
`;

const MenuLeftFocus = styled.button`
  width: 110px;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(62, 132, 237);
  color: white;
  border: none;
  margin-left: 15px;
`;
const MenuLeftFocusIcons = styled.div`
  font-size: 35px;
`;

const MenuRightClick = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuRightUp = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 70%;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  width: 30%;
`;
const Logo = styled.img`
  width: 100%;
  height: 100%;
`;

// Menu or Search box
const MyCoupangBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SearchBoxSpace = styled.div`
  display: flex;
  flex-direction: row;
  border: 2px solid blue;
  width: 80%;
  height: 60%;
`;

const SearchBoxMenu = styled.div`
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const SearchBoxMenuName = styled.div`
  margin-left: 10px;
`;
const SearchBoxMenuBtn = styled.button`
  font-size: 10px;
  margin-right: 10px;
`;

const SearchBoxInput = styled.input`
  width: 59%;
`;
const SearchBoxBtn = styled.button`
  width: 8%;
  font-size: 23px;
  font-weight: bold;
  background-color: transparent;
  &.search {
    color: blue;
  }
`;
//myPageBtn

const MyBtnSpace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
  height: 100%;
`;

const MyBtn = styled.button`
  background-color: transparent;
  border: none;
`;
const MyBtnIcon = styled.div`
  font-size: 40px;
`;
const MyBtnContents = styled.div`
  margin-top: -5px;
`;

// DownClickMenu
const MenuRightDown = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30%;
`;

const SmallMenuIcons1 = styled.div`
  color: aqua;
  font-size: 25px;
  margin: 3px 3px 0px 0px;
`;
const SmallMenuIcons2 = styled.div`
  color: green;
  font-size: 25px;
  margin: 3px 3px 0px 0px;
`;
const SmallMenuIcons3 = styled.div`
  color: #cc5e46;
  font-weight: bolder;
  font-size: 20px;
`;

const SmallMenuIconBackground = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #d32ad6;
  margin-right: 3px;
`;
const SmallMenuIcons4 = styled.div`
  height: 100%;
  font-weight: bolder;
  font-size: 23px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const SmallMenuIcons5 = styled.div`
  color: black;
  font-size: 30px;
  margin: 3px 3px 0px 0px;
  margin-top: 5px;
`;
const SmallMenuIcons6 = styled.div`
  color: blue;
  font-size: 20px;
  margin: 3px 3px 0px 0px;
  transform: rotate(315deg);
  margin-top: 5px;
`;
const SmallMenu = styled.div`
  margin: 0px 10px;
  font-size: 15px;
  display: flex;
  align-items: center;
`;
export default Menu;

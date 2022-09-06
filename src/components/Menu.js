import React from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { IoIosRocket } from "react-icons/io";
import copangLogo from "../img/logo_coupang_w350.png";

function Menu() {
  return (
    <MainMenuBox>
      <MenuLeftFocus>
        <div>
          <GiHamburgerMenu />
        </div>
        <div>카테고리</div>
      </MenuLeftFocus>
      <MenuRightClick>
        <MenuRightUp>
          <img src={copangLogo} />
          <div>
            <div>
              <div>전체</div>
              <div>
                <AiFillCaretDown />
              </div>
            </div>
            <input placeholder="찾고 싶은 상품을 검색해보세요!" />
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div>
            <div></div>
            <div>마이쿠팡</div>
          </div>
          <div>
            <div></div>
            <div>장바구니</div>
          </div>
        </MenuRightUp>
        <MenuRightDown>
          <div>
            <IoIosRocket />
            로켓배송
          </div>
          <div>
            <IoIosRocket />
            로켓프래시
          </div>
          <div>추석</div>
          <div>쿠팡비즈</div>
          <div>로켓직구</div>
          <div>골드박스</div>
          <div>와우회원할인</div>
          <div>이벤트/쿠폰</div>
          <div>착한상점</div>
          <div>기획전</div>
          <div>여행/티켓</div>
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
  border: 1px solid green;
`;

const MenuLeftFocus = styled.div`
  width: 100px;
  height: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(62, 132, 237);
  color: white;
`;

const MenuRightClick = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuRightUp = styled.div`
  display: flex;
  flex-direction: row;
`;

const MenuRightDown = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Menu;

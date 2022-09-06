import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

function subMenu() {
  return (
    <SubMenuDisplay>
      <SubMenuBox>
        <SubMenuLeft>
          <div>즐겨찾기</div>
          <SubMenuLeftIcons>
            입점신청
            <AiFillCaretDown />
          </SubMenuLeftIcons>
        </SubMenuLeft>
        <SubMenuRight>
          <div>로그인</div>
          <div>회원가입</div>
          <div>고객센터</div>
        </SubMenuRight>
      </SubMenuBox>
    </SubMenuDisplay>
  );
}

const SubMenuDisplay = styled.div`
  width: 100%;
  height: 30px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const SubMenuBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubMenuLeft = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 10px;
`;

const SubMenuLeftIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SubMenuRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-size: 10px;
`;

export default subMenu;

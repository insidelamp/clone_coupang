import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const navigate = useNavigate();

  const coupangHome = () => {
    navigate("/");
  };
  return (
    <FooterMain>
      <FooterInformation>
        <FooterInformationContents>회사소개</FooterInformationContents>
        <FooterBorder />
        <FooterInformationContents>
          investor Relations
        </FooterInformationContents>
        <FooterBorder />
        <FooterInformationContents>인재채용</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>입점 / 재휴문의</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>공지사항</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>고객의 소리</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>이용약관</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>개인정보 처리방침</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>쿠팡페이 이용약관</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>
          쿠팡페이 개인정보처리방침
        </FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>신뢰관리센터</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>재휴마케팅</FooterInformationContents>
        <FooterBorder />

        <FooterInformationContents>광고안내</FooterInformationContents>
        <FooterInformationSelect>
          <FooterInformationSelectOption value="1">
            Global Site
          </FooterInformationSelectOption>
          <FooterInformationSelectOption value="2">
            Coupang Taiwan
          </FooterInformationSelectOption>
        </FooterInformationSelect>
      </FooterInformation>
      <FooterCoupangInformationSpace>
        <FooterCoupangInformation>
          <FooterCopangLogo onClick={coupangHome}>쿠팡</FooterCopangLogo>
          <div>
            <div>상호명 및 호스팅 서비스 제공 : 쿠팡(주)</div>
            <div>대표이사 : 강한승,박대준</div>
            <div>서울시 송파구 송파대로 570</div>
            <div>사업자 등록번호 : 120-88-00767</div>
            <div>통신판매업신고 : 2017-서울송파-0680</div>
            <div>사업자정보확인 </div>
          </div>
        </FooterCoupangInformation>
        <div>1577-7011</div>
        <div>우리은행 채무지급보증안내</div>
      </FooterCoupangInformationSpace>
      <div>
        <div>쿠팡서비스</div>
        <div>정보보안국제표준</div>
        <div>개인정보보호우수사이트</div>
        <div>운영매장</div>
      </div>
      <div>
        <div></div>
        <div>
          <div>페이스북</div>
          <div>네이버</div>
          <div>인스타</div>
        </div>
      </div>
    </FooterMain>
  );
}

const FooterMain = styled.footer`
  display: flex;
  flex-direction: column;
`;

const FooterInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 3px solid gray;
  border-bottom: 1px solid gray;
  width: 100%;
  height: 45px;
`;

const FooterInformationContents = styled.div`
  font-size: 12px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  &:nth-child(15) {
    font-weight: bolder;
  }
  &:nth-child(19) {
    font-weight: bolder;
  }
`;

const FooterCoupangInformationSpace = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid red;
  justify-content: space-evenly;
  align-items: center;
`;

const FooterInformationSelect = styled.select`
  margin-left: 25px;
  width: 10%;
`;

const FooterInformationSelectOption = styled.option``;

const FooterBorder = styled.div`
  border-right: 1px solid black;
  margin-left: 15px;
  height: 15px;
  margin-top: auto;
  margin-bottom: auto;
`;
const FooterCoupangInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid blue;
  width: 30%;
`;

const FooterCopangLogo = styled.a`
  font-size: 40px;
`;
const FooterRespite = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Base = styled.footer`
  width: 100%;
  margin: 0 auto;
  height: 150px;
  background-color: #fff;
  border-top: 1px solid #ebebeb;
`;

const Navigation = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`;

const LogoBox = styled.div`
  display: flex;
  height: 60px;
`;

const TextLogo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  > span[class="primary"] {
    color: #081d58;
  }
  > span:not(.primary) {
    color: #6db329;
  }
`;

const Menu = styled.div``;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  &:first-child {
    color: red;
  }
`;
const ListItem = styled.li`
  display: inline-block;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.01em;
  font-weight: 500;
  color: #595959;
  &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 12px;
    margin: 4px 12px 0;
    background-color: #d5d5d5;
    vertical-align: top;
  }
  &:first-child::before {
    display: none;
  }
`;

const Footer: React.FC = () => {
  return (
    <Base>
      <Navigation>
        <LogoBox>
          <Link to="/">
            <TextLogo>
              <span className="primary">BOOK</span>
              <span>STORE</span>
            </TextLogo>
          </Link>
        </LogoBox>
        <Menu>
          <ListWrapper>
            <ListItem>
              <Link to="/">회사소개</Link>
            </ListItem>
            <ListItem>
              <Link to="/">이용약관</Link>
            </ListItem>
            <ListItem>
              <Link to="/">개인정보처리방침</Link>
            </ListItem>
            <ListItem>
              <Link to="/">청소년보호정책</Link>
            </ListItem>
            <ListItem>
              <Link to="/">대량주문안내</Link>
            </ListItem>
            <ListItem>
              <Link to="/">협력사여러분</Link>
            </ListItem>
            <ListItem>
              <Link to="/">채용정보</Link>
            </ListItem>
            <ListItem>
              <Link to="/">광고소개</Link>
            </ListItem>
          </ListWrapper>
        </Menu>
      </Navigation>
    </Base>
  );
};

export default Footer;

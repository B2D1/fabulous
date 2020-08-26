import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { A } from '@style/common';
interface Header {
  path: string;
  userName: string;
}
const Container = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0 4px 13px -3px rgba(0, 0, 0, 0.10196);
  border-bottom: 1px solid #d2d2d2;
  color: #5f6368;
`;
const UserName = styled.div`
  margin-right: 20px;
`;
const Nav = styled.nav`
  flex: 1;
  height: 48px;
  ul {
    padding: 0;
    margin: 0;
    height: 100%;
    display: flex;
  }
  ul li {
    position: relative;
    height: 100%;
    list-style: none;
    padding: 0 20px;
    line-height: 48px;
    ::after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 3px 3px 0 0;
      bottom: 0;
      height: 3px;
      left: 22px;
      right: 22px;
    }
    :hover::after {
      background: #5f6368;
    }
    &.active {
      color: #185abc;
      ::after {
        background: #185abc;
      }
    }
  }
`;
const Header: React.FC<Header> = ({ path, userName }) => {
  const location = useLocation();
  const config = [
    { path: 'plan', name: '阶段规划' },
    { path: 'clockIn', name: '每日打卡' },
  ];
  return (
    <Container>
      <Nav>
        <ul>
          {config.map((item, index) => (
            <li key={index} className={location.pathname === `${path}${item.path}` ? 'active' : ''}>
              <A to={`${path}${item.path}`}>{item.name}</A>
            </li>
          ))}
        </ul>
      </Nav>
      <UserName>你好，{userName}</UserName>
    </Container>
  );
};

export default Header;

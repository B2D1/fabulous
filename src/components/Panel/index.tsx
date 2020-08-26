import React from 'react';
import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { RouteComponentProps, withRouter } from 'react-router-dom';
const Time = styled.div`
  svg {
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
`;
const Title = styled.h2`
  margin: 0;
  color: #1a73e8;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  transform: translateX(100%);
  top: 0;
  right: 0;
  background: rgba(0, 0, 255, 0.7);
  width: 100px;
  color: #fff;
  font-size: 1.5em;
  transition: transform 0.2s ease;
  cursor: pointer;
`;

const Priority = styled.div`
  margin: 0 10px;
  svg {
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
`;
const Container = styled.div`
  position: relative;
  padding: 20px;
  background-color: #fff;

  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.12), 10px 0px 20px -10px rgba(0, 0, 0, 0.12),
    -10px 0px 20px -10px rgba(0, 0, 0, 0.12);
  &:hover {
    ${Detail} {
      transform: translateX(0);
    }
  }
  & + & {
    margin-top: 20px;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;
const Desc = styled.p`
  font-size: 14px;
  color: #5f6368;
`;

const Panel: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <Container>
      <Detail onClick={() => history.push('/plan/123')}>详情</Detail>
      <Info>
        <Title>这是我的2020年度计划</Title>
        <Priority>
          <AiFillStar color='#ff4040' />
          <AiFillStar color='#ff4040' />
          <AiFillStar color='#ff4040' />
        </Priority>
        <Time>
          <FaRegClock />
          <span>2020-1-1 至 2021-1-1</span>
        </Time>
      </Info>
      <Desc>在新的一年，我要完成这些事项</Desc>
    </Container>
  );
};

export default withRouter(Panel);

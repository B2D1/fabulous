import Panel from '@components/Panel';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  font-size: 1em;
  margin-bottom: 30px;
  padding: 1em 2em;
  -webkit-appearance: none;
  appearance: none;
  background-color: rgba(0, 0, 255, 0.7);
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
  box-shadow: 0 2px 15px rgba(0, 0, 255, 0.4);
  outline: none;
`;

interface IProps extends RouteComponentProps {}

const Plan: React.FC<IProps> = ({ history }) => {
  return (
    <div>
      <Button onClick={() => history.push('/plan/new')}>新增计划</Button>
      <div>
        <Panel />
        <Panel />
        <Panel />
      </div>
    </div>
  );
};

export default withRouter(Plan);

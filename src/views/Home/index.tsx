import AutoRouter from '@components/AutoRouter';
import Header from '@components/Header';
import { IConfigProps } from '@routes/route.config';
import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.main`
  padding: 30px 20px;
  background-color: #f2f2f7;
  flex: 1;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Home: React.FC<{} & IConfigProps> = ({ routeConfig }) => {
  let match = useRouteMatch();
  return (
    <Container>
      <Header path={match.path} userName="BBD" />
      <Main>{routeConfig && AutoRouter(routeConfig)}</Main>
    </Container>
  );
};

export default Home;

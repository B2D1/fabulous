import React from 'react';

import { RouteComponentProps, withRouter } from 'react-router-dom';

import { IConfigProps } from '@routes/route.config';
import AutoRouter from '@components/AutoRouter';

interface IProps extends IConfigProps, RouteComponentProps {}

const Plan: React.FC<IProps> = ({ routeConfig }) => {
  return <div>{routeConfig && AutoRouter(routeConfig)}</div>;
};

export default withRouter(Plan);

import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { IRouter, RouteType, routerConfig } from '@routes/route.config';

const GenerateRoute: FC<IRouter> = ({ component: Component, path, childrenRoute }) => {
  if (Component) {
    return <Route path={path} render={() => <Component routeConfig={childrenRoute} />}></Route>;
  } else {
    return null;
  }
};



const AutoRouter = (routes: IRouter[]) => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return route.type === RouteType.Route ? (
          <GenerateRoute {...route} key={index} />
        ) : (
          <Redirect to={route.path} key={index} />
        );
      })}
    </Switch>
  );
};

export default AutoRouter;

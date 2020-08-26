import Login from '@views/Login';
import Home from '@views/Home';
import Plan from '@views/Plan';
import NewPlan from '@views/Plan/New';
import PlanDetail from '@views/Plan/Detail';
import ClockIn from '@views/ClockIn';
import PlanList from '@views/Plan/List';

export enum RouteType {
  Redirect = 'redirect',
  Route = 'route',
}

export interface IConfigProps {
  routeConfig?: IRouter[];
}

export interface IRouter {
  path: string;
  component?: React.FC | React.FC<IConfigProps> | React.ComponentClass;
  childrenRoute?: IRouter[];
  type: RouteType;
  exact?: boolean;
}
const routerConfig: IRouter[] = [
  {
    path: '/login',
    component: Login,
    type: RouteType.Route,
  },
  {
    path: '/',
    component: Home,
    type: RouteType.Route,
    childrenRoute: [
      {
        path: '/plan',
        component: Plan,
        type: RouteType.Route,
        childrenRoute: [
          {
            path: '/new',
            component: NewPlan,
            type: RouteType.Route,
          },
          {
            path: '/list',
            component: PlanList,
            type: RouteType.Route,
          },
          {
            path: '/:planId',
            component: PlanDetail,
            type: RouteType.Route,
          },
          {
            path: '/list',
            type: RouteType.Redirect,
          },
        ],
      },
      {
        path: '/clockIn',
        component: ClockIn,
        type: RouteType.Route,
      },
    ],
  },
];

const prefixPath = (routerConfig: IRouter) => {
  if (routerConfig.childrenRoute) {
    for (const child of routerConfig.childrenRoute) {
      prefixPath(child);
      if (routerConfig.path !== '/') {
        child.path = routerConfig.path + child.path;
      }
    }
  }
};

const enhanceRouter = (routerConfig: IRouter[]) => {
  for (const route of routerConfig) {
    prefixPath(route);
  }
};

enhanceRouter(routerConfig);

export { routerConfig };

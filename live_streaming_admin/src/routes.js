import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"; 
import {toast} from "react-toastify";
import AddLiveSchedule from './components/LiveSchedule/AddLiveSchedule';
import ListAllLiveSchedule from './components/LiveSchedule/ListAllLiveSchedule';
import ListAllUsers from './components/UserManagement/ListAllUsers'
import Dashboard from "./components/Dashboard/dashboard";
import NotFound from './components/NotFound/404NotFound';
import WatchNowVideos from './components/WatchVideos/WatchNowVideos';
import OnDemandModule from './components/OnDemand/OnDemandModule';
import ListClubReadyUsers from './components/ClubReadyManagement/ListClubReadyUsers';


const ROUTES = [
    {
        path:'/', 
        key:"DASHBOARD", 
        component: props => {
            if (!localStorage.getItem("userData")) {
              // alert("You need to log in to access user dashboard");
              toast.dismiss();
              toast.error("Please Login", { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true });
              return <Redirect to={"/login"} />;
            }
            return <RenderRoutes {...props} />;
            
        },
        routes: [
            {path: "/", key: "DASHBOARD_INDEX", exact: true, component:Dashboard},
            {path: '/add-live-schedule', key:'ADD_LIVE_SCHEDULE', exact: true, component:AddLiveSchedule},
            {path: '/list-live-schedule', key:'LIST_LIVE_SCHEDULE', exact: true, component:ListAllLiveSchedule},
            {path: '/list-users', key:'LIST_ALL_USERS', exact: true, component:ListAllUsers},
            {path: '/on-demand', key:'ON_DEMAND', exact: true, component:OnDemandModule},
            {path: '/watch/:stream_name', key:'WATCH', exact: true, component:WatchNowVideos},
            {path: '/club-ready-users', key:'CLUB_READY_USERS', exact: true, component:ListClubReadyUsers},
        ]
    }
]

export default ROUTES;

function RouteWithSubRoutes(route) {
    console.log(route)
    return (
      <Route
        path={route.path}
        exact={route.exact}
        render={props => <route.component {...props} routes={route.routes} />}
      />
    );
}


export function RenderRoutes({ routes }) {
    console.log(routes)
    return (
      <Switch>
        {routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} />;
        })}
        <Route render={props => <NotFound />} />
      </Switch>
    );
}

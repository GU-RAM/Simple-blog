import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesConfig from './config/routes';
import SinglePost from './containers/SinglePost/SinglePost';
import Posts from './containers/Posts/Posts';
import UserPage from './containers/UserPage/UserPage';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={RoutesConfig.USER_PAGE}>
          <UserPage />
        </Route>
        <Route path={RoutesConfig.SINGLE_POST}>
          <SinglePost />
        </Route>
        <Route path={RoutesConfig.MAIN}>
          <Posts />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;

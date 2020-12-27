import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoutesConfig from './config/routes';
import SinglePost from './containers/SinglePost/SinglePost';
import Posts from './containers/Posts/Posts';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={RoutesConfig.MAIN}>
          <Posts />
        </Route>
        <Route path={RoutesConfig.SINGLE_POST}>
          <SinglePost />
        </Route>
        <Route>Page Not Found</Route>
      </Switch>
    </>
  );
};

export default Routes;

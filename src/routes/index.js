import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Progress from '@/components/Progress';

const MainRouter = lazy(() => import('./main'));

const Router = () => {
  return (
    <Suspense fallback={<Progress message="Loading..." />}>
      <Switch>
        <Route path={process.env.PUBLIC_URL + '/'} component={MainRouter} />
      </Switch>
    </Suspense>
  );
};

export default Router;

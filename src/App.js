import { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';
import Container from 'Components/Container/Container';
import Loader from 'react-loader-spinner';
import HomePage from 'Components/HomePage/HomePage';

const Navigation = lazy(() => import('./Components/Navigation/Navigation'));

const loader = <Loader type="Oval" color="#00BFFF" height={80} width={80} />;

export default function App() {
  return (
    <>
      <Suspense fallback={loader}>
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

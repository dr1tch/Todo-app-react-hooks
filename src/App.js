import "tailwindcss/tailwind.css";
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
} from 'react-router-dom'
import Container from './layout/container';
import Header from './layout/header'
import * as ROUTES from './constants/routes';
import ProtectedRoute from "./helpers/protected-routes";
import fetchAPI from './helpers/fetch';

import UserContext from './context/user';

import { lazy, useEffect, useState } from 'react';
const Dashboard = lazy(() => import('./pages/dashboard'))
const Login = lazy(() => import('./pages/auth/login'));
const Logout = lazy(() => import('./pages/auth/logout'));
const Register = lazy(() => import('./pages/auth/register'));

function App() {
  const [user, setUser] = useState(null);
  const fetch = new fetchAPI();
  useEffect(() => {
    fetch.get("https://api-nodejs-todolist.herokuapp.com/user/me")
    .then(data => console.table(data))
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <div className="App bg-gray-50 dark:bg-gray-800 h-screen">
            <Header />
              <Container>
              {/* <Suspense fallback={<Spinner />} > */}
                <ProtectedRoute exact path={ROUTES.DASHBOARD} user={user}>
                  <Dashboard />
                </ProtectedRoute>
                <Route exact path={ROUTES.LOGIN}>
                  <Login />
                </Route>
                <Route exact path={ROUTES.LOGOUT}>
                  <Logout />
                </Route>
                <Route exact path={ROUTES.REGISTER}>
                  <Register />
                </Route>
                {/* </Suspense> */}
              </Container>
          </div>
        </Switch>      
      </Router>
    </UserContext.Provider>
  );
}

export default App;

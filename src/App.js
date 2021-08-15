import "tailwindcss/tailwind.css";
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
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
const Layout = lazy(() => import("./layout/layout"));

function App() {
  const [user, setUser] = useState(null);
  const fetch = new fetchAPI();
  useEffect(() => {
    if(localStorage.getItem('token'))
    fetch.get("https://api-nodejs-todolist.herokuapp.com/user/me")
    .then(data => console.table(data))
    else console.log('not connected')
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <div className="App bg-gray-50 dark:bg-gray-800 h-screen">
                <ProtectedRoute path={ROUTES.TASKS} user={user}>
                  <Route
                      path={ROUTES.TASKS}
                      render={(props) => (
                        <Layout
                          {...props}
                        />
                      )}
                    />
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
                <Redirect from='/' to={ROUTES.TASKS} />
          </div>
        </Switch> 
      </Router>     
    </UserContext.Provider>
  );
}

export default App;

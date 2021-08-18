import "tailwindcss/tailwind.css";
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Redirect
} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import ProtectedRoute from "./helpers/protected-routes";
import fetchAPI from './helpers/fetch';

import UserContext from './context/user';
import tasksContext from './context/tasks';

import { lazy, useEffect, useState } from 'react';
const Login = lazy(() => import('./pages/auth/login'));
const Logout = lazy(() => import('./pages/auth/logout'));
const Register = lazy(() => import('./pages/auth/register'));
const Layout = lazy(() => import("./layout/layout"));

function App() {
  const [user, setUser] = useState(null);
  const [tasks, setTasks] = useState([])
  const [count, setCount] = useState(0)
  const fetch = new fetchAPI();
  useEffect(() => {
    if(localStorage.getItem('token')){
      fetch.get("https://api-nodejs-todolist.herokuapp.com/user/me")
      .then(data => {
        setUser(data)
      })
      fetch.get("https://api-nodejs-todolist.herokuapp.com/task")
      .then(data => {
          setTasks(data.data.reverse());
          setCount(data.count);
      })
    }
    else console.log('not connected')
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <tasksContext.Provider value={{ tasks, setTasks, count, setCount }}>
        <Router>
          <Switch>
            <div className="App bg-white h-full">
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
      </tasksContext.Provider>    
    </UserContext.Provider>
  );
}

export default App;

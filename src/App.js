import "tailwindcss/tailwind.css";
import { 
  BrowserRouter as Router, 
  Switch,
  Route, 
  Link,
} from 'react-router-dom'
import Container from './layout/container';
import Header from './layout/header'
import Spinner from './components/utils/spinner';

import UserContext from './context/user';

import { lazy, Suspense, useState } from 'react';
const Home = lazy(() => import('./pages/home'))
const Login = lazy(() => import('./pages/auth/login'));

function App() {
  const initialState = {
    _id : '',
    name: '',
    email: '',
    age: '',
    createdAt: '',
    updatedAt: ''
  }
  const [user, setUser] = useState(initialState);
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Switch>
          <div className="App bg-gray-50 dark:bg-gray-800 h-screen">
            <Header />
              <Container>
              {/* <Suspense fallback={<Spinner />} > */}
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/login">
                  <Login />
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

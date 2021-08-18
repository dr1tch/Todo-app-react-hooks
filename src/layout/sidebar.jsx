import { NavLink, Link, Route, Switch, useLocation } from 'react-router-dom';
import routes from '../routes/sidebar'
import * as Icons from '../icons';
import { useEffect } from 'react';

function Icon({ icon, ...props }) {
    console.log(icon)
    const Icon = Icons[icon]
    console.log(Icons)
    return <Icon {...props} />
}

const Sidebar = () => {
  const location = useLocation();
  useEffect(() => {
    console.table(Icon);
  }, [])
    return (
        <div className='container mx-auto bg-white text-gray-darkest'>
            <ul className="flex flex-row justify-start items-center w-min gap-7">
            {
              routes.map((route, i) => (
                <li className="w-min py-3" key={i}>
                  <NavLink
                    to={route.path}
                    className="flex flex-col items-center justify-center gap-2 font-opensans w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200"
                    activeClassName="text-gray-700 dark:text-gray-100 "
                  >
                      <span className="">{route.name}</span>
                      <span
                            className={`bg-opacity-70 w-2 h-2 rounded-full ${location.pathname !== route.path ? 'bg-white' : 'bg-gray-darkest'} `}
                            aria-hidden="true"
                      ></span>
                      <Route path={route.path} exact={route.exact}>
                          {/* <span
                            className="bg-opacity-70 w-2 h-2 rounded-full bg-green-200 "
                            aria-hidden="true"
                          ></span> */}
                      </Route>
                      {/* <Icon className="w-7 h-7" aria-hidden="true" icon={route.icon} /> */}
                      
                  </NavLink>
                </li>
               )
              )
            }
            </ul>         
        </div>
    )
}

export default Sidebar;
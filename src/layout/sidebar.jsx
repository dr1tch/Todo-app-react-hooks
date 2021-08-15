import { NavLink, Link, Route, Switch } from 'react-router-dom';
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
  useEffect(() => {
    console.table(Icon);
  }, [])
    return (
        <div className='w-56'>
            <ul className="pl-2 mt-16">
            {
              routes.map((route, i) => (
                <li className="w-full relative px-6 py-3" key={i}>
                  <NavLink
                    to={route.path}
                    className="flex items-center justify-start font-poppins w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200"
                    activeClassName="text-gray-700 dark:text-gray-100 "
                  >
                      <Route path={route.path} exact={route.exact}>
                          <span
                            className="absolute bg-opacity-70 inset-y-0 left-0 w-1 bg-green-200  rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                          ></span>
                      </Route>
                      {/* <Icon className="w-7 h-7" aria-hidden="true" icon={route.icon} /> */}
                      <span className="ml-2">{route.name}</span>
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
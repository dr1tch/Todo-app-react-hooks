import React, { useEffect } from 'react';
import { Route, Redirect, useLocation, useHistory } from 'react-router-dom'
import routes from '../routes';
import * as ROUTES from '../constants/routes';
import Header from './header';
import Sidebar from './sidebar';

const Layout = () => {
    const location = useLocation();
    const history = useHistory()
    useEffect(() => {
        if(!localStorage.getItem('token')){
            history.push(ROUTES.LOGIN)
        }
        console.log('layout', location.pathname)
        console.table(routes);
    }, [])
    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 overflow-auto">
        <Header />
        <div className="flex w-full">
            <Sidebar />
            <main className="h-full overflow-y-auto w-full">
                <div className=" grid px-6 mx-6">
                {/* <Suspense fallback={<Spinner />}> */}
                        {/* <AddService updated={updated}/> */}
                        {/* <Switch> */}
                            {routes.map((route, i) => {
                                return route.component ? (
                                    <Route
                                        key={i}
                                        exact={route.exact}
                                        path={route.path}
                                        render={(props) =>
                                            <route.component {...props} 
                                    />}
                                    />
                                ) : null
                            })}
                            <Redirect from='/' to={ROUTES.TASKS} />
                            {/* <Route path='*'
                                render={(props) => (
                                    <div>
                                        <h1>404 PAGE NOT FOUND!</h1>
                                    </div>
                                )}
                            /> */}
                        {/* </Switch> */}
                    {/* </Suspense> */}
                </div>
            </main>
        </div>
    </div>
    )
}

export default Layout;
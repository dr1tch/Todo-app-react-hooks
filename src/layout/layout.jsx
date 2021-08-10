import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from '../routes';
import Spinner from '../components/utils/spinner';
import Header from './header';
import Container from './container';
import Sidebar from './sidebar';

const Layout = () => {
    return (
        <div className="flex flex-col h-screen bg-gray-50 dark:bg-gray-900 overflow-auto">
        <Header />
        <div className="flex lg:flex-1 w-full mx-14">
            <Sidebar />
            <main className="h-full overflow-y-auto">
                <div className=" grid px-6 mx-6">
                    <Suspense fallback={<Spinner />}>
                        {/* <AddService updated={updated}/> */}
                        <Switch>
                            {routes.map((route, i) => {
                                return route.component ? (
                                    <Route
                                        key={i}
                                        exact={true}
                                        path={route.path}
                                        render={(props) =>
                                            <route.component {...props} />}
                                    />
                                ) : null
                            })}
                            {/* <Route path="*"
                                render={(props) => (
                                    <Page404 />
                                )}
                            /> */}


                        </Switch>
                    </Suspense>
                </div>
            </main>
        </div>
    </div>
    )
}

export default Layout;
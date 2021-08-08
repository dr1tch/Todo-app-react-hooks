import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import * as ROUTES from "../constants/routes";

export default function ProtectedRoute({ user, children, ...rest }) {
    return ( <
        Route {...rest }
        render = {
            ({ location }) => {
                if (localStorage.getItem("token")) {
                    return React.cloneElement(children, { user });
                }

                if (!localStorage.getItem("token")) {
                    return ( <
                        Redirect to = {
                            {
                                pathname: ROUTES.LOGIN,
                                state: { from: location },
                            }
                        }
                        />
                    );
                }

                return null;
            }
        }
        />
    );
}

ProtectedRoute.propTypes = {
    user: PropTypes.object,
    children: PropTypes.object.isRequired,
};
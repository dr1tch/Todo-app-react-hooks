import { lazy } from "react";
import * as ROUTES from "../constants/routes";

const Profile = lazy(() =>
    import ("../pages/profile"));
const EditProfile = lazy(() =>
    import ("../pages/edit-profile"));
const Tasks = lazy(() =>
    import ("../pages/tasks/tasks"));
const Pending = lazy(() =>
    import ("../pages/tasks/pending"));
const Completed = lazy(() =>
    import ("../pages/tasks/completed"));

const routes = [{
        path: ROUTES.TASKS, // the url
        component: Tasks, // view rendered
        exact: true,
    },
    {
        path: ROUTES.COMPLETED, // the url
        component: Completed, // view rendered
        // exact: true,
    },
    {
        path: ROUTES.PENDING, // the url
        component: Pending, // view rendered
        // exact: true,
    },
    {
        path: ROUTES.EDIT_PROFILE, // the url
        component: EditProfile, // view rendered
        // exact: true,
    },
    {
        path: ROUTES.PROFILE, // the url
        component: Profile, // view rendered
        // exact: true,
    },
];

export default routes;
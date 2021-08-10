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
    },
    {
        path: ROUTES.COMPLETED, // the url
        component: Completed, // view rendered
    },
    {
        path: ROUTES.PENDING, // the url
        component: Pending, // view rendered
    },
    {
        path: ROUTES.EDIT_PROFILE, // the url
        component: EditProfile, // view rendered
    },
    {
        path: ROUTES.PROFILE, // the url
        component: Profile, // view rendered
    },
];

export default routes;
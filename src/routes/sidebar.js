import * as ROUTES from "../constants/routes";

const routes = [{
        path: ROUTES.TASKS, // the url
        icon: "TasksIcon", // the component being exported from icons/index.js
        name: "Tasks", // name that appear in Sidebar
        exact: true,
    },
    {
        path: ROUTES.COMPLETED, // the url
        icon: "CompletedIcon", // the component being exported from icons/index.js
        name: "Completed Tasks", // name that appear in Sidebar
        // exact: true,
    },
    {
        path: ROUTES.PENDING, // the url
        icon: "PendingIcon", // the component being exported from icons/index.js
        name: "Pending Tasks", // name that appear in Sidebar
        // exact: true,
    },
    {
        path: ROUTES.PROFILE, // the url
        icon: "ProfileIcon", // the component being exported from icons/index.js
        name: "Profile", // name that appear in Sidebar
        // exact: true,
    },
    {
        path: ROUTES.EDIT_PROFILE, // the url
        icon: "SettingsIcon", // the component being exported from icons/index.js
        name: "Edit Profile", // name that appear in Sidebar
        // exact: true,
    },
];

export default routes;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import JobsDetails from "../componants/browseByCategory/JobsDetails";
import AddJob from "../pages/addJob/AddJob";
import ErrorPage from "../pages/Error/ErrorPage";
import MyPostedJobs from "../pages/myPostJob/MyPostedJobs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/job/:id",
        element: <JobsDetails />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: <AddJob />,
      },
      {
        path: "/my-posted-jobs",
        element: <MyPostedJobs />,
      },
    ],
  },
]);
export default router;

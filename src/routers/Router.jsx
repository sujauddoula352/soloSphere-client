import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Registration from "../pages/authentication/Registration";
import JobsDetails from "../componants/browseByCategory/JobsDetails";
import AddJob from "../pages/addJob/AddJob";
import ErrorPage from "../pages/Error/ErrorPage";
import MyPostedJobs from "../pages/myPostJob/MyPostedJobs";
import UpdateJob from "../pages/updateJob/UpdateJob";
import PrivatedRouter from "./PrivatedRouter";
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
        element: (
          <PrivatedRouter>
            <JobsDetails />
          </PrivatedRouter>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/add-job",
        element: (
          <PrivatedRouter>
            <AddJob />
          </PrivatedRouter>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivatedRouter>
            <UpdateJob />
          </PrivatedRouter>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/my-posted-jobs",
        element: (
          <PrivatedRouter>
            <MyPostedJobs />
          </PrivatedRouter>
        ),
      },
    ],
  },
]);
export default router;

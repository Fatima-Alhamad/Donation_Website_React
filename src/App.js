import Home from "./Pages/Home";
import "./App.css";
import NotFound from "./Pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Volunteer from "./Pages/Volunteer";
import Donate from "./Pages/Donate";
import PrivateRoute from "./Components/PrivateRoute";
import Dashboard from "./Pages/dashboard/Dashboard";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import VolunteeringApp from "./Pages/dashboard/VolunteeringApp";
import { useRef, useState } from "react";
import api from "./Components/api";
import Demonstrations from "./Pages/Demonstrations";
import Participate from "./Pages/Participate";
import DemoDetails from "./Pages/dashboard/DemoDetails";
import EditDemo from "./Pages/dashboard/EditDemo";
import AddDemo from "./Pages/dashboard/AddDemo";
import DonorDetailes from "./Pages/dashboard/DonorDetailes";
import Contact from "./Pages/Contact";

function App() {
  const [loggedAdmin, setLoggedAdmin] = useState("");

  const rejectedApp = useRef(0);
  const acceptedApp = useRef(0);
  function LoggedAdmin(adminId) {
    setLoggedAdmin(adminId);
  }
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this application?")) {
      api.delete(`/volunteers/${id}`);
      rejectedApp.current += 1;
    }
  }
  function handleAccepted() {
    acceptedApp.current += 1;
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/volunteer",
      element: <Volunteer />,
    },
    {
      path: "/donate",
      element: <Donate />,
    },
    {
      path: "/demonstrations",
      element: <Demonstrations />,
    },
    {
      path: "/participate/:demoId",
      element: <Participate />,
    },
    {
      path: "/dashboard",
      element: <PrivateRoute />,
      children: [
        {
          path: "/dashboard/:id",
          element: (
            <Dashboard
              LoggedAdmin={LoggedAdmin}
              handleDelete={handleDelete}
              acceptedApp={acceptedApp}
              rejectedApp={rejectedApp}
              handleAccepted={handleAccepted}
            />
          ),
        },
        {
          path: "/dashboard/volunteering/:appId",
          element: (
            <VolunteeringApp
              loggedAdmin={loggedAdmin}
              handleDelete={handleDelete}
              handleAccepted={handleAccepted}
            />
          ),
        },
        {
          path: "/dashboard/demonstrations/:demoId",
          element: <DemoDetails loggedAdmin={loggedAdmin} />,
        },
        {
          path: "/dashboard/editDemonstrations/:demoId",
          element: <EditDemo loggedAdmin={loggedAdmin} />,
        },
        {
          path: "/dashboard/addDemonstrations",
          element: <AddDemo loggedAdmin={loggedAdmin} />,
        },
        {
          path: "/dashboard/donors/:donorId",
          element: <DonorDetailes loggedAdmin={loggedAdmin} />,
        },
      ],
    },
    {
      path: "/contactUs",
      element: <Contact />,
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

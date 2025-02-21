import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./component/root/Root";
// import Home from "./component/home/Home";
import AddVisa from "./component/addVisa/AddVisa";
import AllVisa from "./component/allVisas/AllVisa";
import CreateUser from "./component/createUser/CreateUser";
import AuthProvider from "./component/authProvider/AuthProvider";
import SingIn from "./component/singIn/SingIn";
import PrivateRoute from "./component/privateRoute/PrivateRoute";
import LayoutHome from "./component/layoutHome/LayoutHome";
import VisaDetails from "./component/visaDetails/VisaDetails";
import MyVisaApp from "./component/myVisaApp/MyVisaApp";
import ErrorPage from "./component/errorPage/ErrorPage";
import MyAddedVisa from "./component/myAddedVisa/MyAddedVisa";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <LayoutHome></LayoutHome>,
      },
      {
        path:"/addvisa",
        element:<PrivateRoute><AddVisa></AddVisa></PrivateRoute>
      },
      {
        path: "/allvisa",
        element:<AllVisa></AllVisa>,
        loader: () => fetch("https://assingment-ten-server-side.vercel.app/allvisa"),
      },
      {
        path: "/createuser",
        element: <CreateUser></CreateUser>,
      },
      {
        path:"/singin",
        element:<SingIn></SingIn>
      },
      {
        path:"/visadetails/:id",
        element:<PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
        loader:({params})=> fetch(`https://assingment-ten-server-side.vercel.app/allvisa/${params.id}`)
      },
      {
        path:"/myvisaapp",
        element:<PrivateRoute><MyVisaApp></MyVisaApp></PrivateRoute>,
        loader:()=>fetch('https://assingment-ten-server-side.vercel.app/visaapply')
      },
      {
        path:"/myaddedvisa",
        element:<PrivateRoute><MyAddedVisa></MyAddedVisa></PrivateRoute>,
        loader: () => fetch("https://assingment-ten-server-side.vercel.app/allvisa"),
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);

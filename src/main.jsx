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
        loader: () => fetch("http://localhost:5000/allvisa"),
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
        loader:({params})=> fetch(`http://localhost:5000/allvisa/${params.id}`)
      },
      {
        path:"/myvisaapp",
        element:<PrivateRoute><MyVisaApp></MyVisaApp></PrivateRoute>,
        loader:()=>fetch('http://localhost:5000/visaapply')
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

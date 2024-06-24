import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import OurMenu from "../pages/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,

      children : [
        {
            path: '/',
            element: <Home />
        },
        {
          path: "/our-menu",
          element: <OurMenu />
        },
        {
          path: "/our-shop",
          element: <OurShop />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path:'/sign-up',
      element:<SignUp />
    }
    
  ]);

  export default router;
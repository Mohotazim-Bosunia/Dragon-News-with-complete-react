import { createBrowserRouter} from "react-router";
import HomeLayout from "../layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../layout/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component:HomeLayout,
    children:[{
      index:true,
      Component:Home
    },
    {
      path:'/category/:id',
      Component:CategoryNews,
      loader:()=>fetch('/news.json'),
    }
  
  ]
  },
  {
    path: "/auth",
    Component:AuthLayout,
    children:[
      {
      path:'/auth/login',
      Component:Login
      },

       {
      path:'/auth/register',
      Component:Register
      },
  ]
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>
  },
]);

export default router;
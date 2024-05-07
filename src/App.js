import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";
import LogIn from "./components/Login/LogIn";
import Register from "./components/Register/Register";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import Shipping from "./components/Shipping";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "orders",
          loader: productsAndCartLoader,
          element: (
            <PrivetRoute>
              <Orders></Orders>
            </PrivetRoute>
          ),
        },
        {
          path: "inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "shipping",
          element: (
            <PrivetRoute>
              <Shipping></Shipping>
            </PrivetRoute>
          ),
        },
        {
          path: "login",
          element: <LogIn></LogIn>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Kid from "./pages/Kid";
import Women from "./pages/Women";
import Men from "./pages/Men";
import ErrorPage from "./pages/ErrorPage";
import ProductCards from "./components/ProductCard";
import ProductDeatils from "./components/ProductDeatils";

import { Suspense, lazy } from "react";
const Grocery = lazy(()=> import(`./components/Grocery`))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <ProductCards />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery /> </Suspense> ,
      },
      {
        path: "/products/:productId",
        element: <ProductDeatils />,
      },
    ],
    errorElement: <ErrorPage/>
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={appRouter}>
    <App />
  </RouterProvider>
  // </React.StrictMode>
); 
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import appStore from "./store/store";
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
import Cart from "./components/Cart";
import Memo from "./hooks/Memo";
const Grocery = lazy(() => import(`./components/Grocery`));


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),  
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/memo",
        element:<Memo/>
      },
      {
        path: "/products/:productId",
        element: <ProductDeatils />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </Provider>
  // </React.StrictMode>
);

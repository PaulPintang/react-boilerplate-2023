import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import "./index.css";

import RootLayout from "./routes/RootLayout";
import Users from "./routes/Users";
import UserDetails from "./routes/UserDetails";
import { Protected } from "./middleware/Protected";
const Home = lazy(() => import("./routes/Home"));
const Contact = lazy(() => import("./routes/Contact"));
const About = lazy(() => import("./routes/About"));
const ErrorPage = lazy(() => import("./routes/ErrorPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
        children: [
          {
            path: "number",
            element: <h1>Contact me on this no: 09234232342342342344</h1>,
          },
          {
            path: "email",
            element: <h1>Contact me on this account: contactme@gmail.com</h1>,
          },
        ],
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users",
        element: (
          <Protected>
            <Users />
          </Protected>
        ),
      },
      {
        path: "users/:id",
        element: (
          <Protected>
            <UserDetails />
          </Protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

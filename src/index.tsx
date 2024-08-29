import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Providers from "./app/providers";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./app/page";
import CampaignsLis from "./pages/campanhas";
import InstitutionsPage from "./pages/organizacoes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/campanhas",
    element: <CampaignsLis/>
  },
  {
    path: "/organizacoes",
    element: <InstitutionsPage/>
  }
]);


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

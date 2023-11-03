import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import TrainingCustomData from "./pages/posts/TrainingCustomData";
import UnderstandingTheTransformer from "./pages/posts/UnderstandingTheTransformer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/blog/1",
    element: <TrainingCustomData/>,
  },
  {
    path: "/blog/2",
    element: <UnderstandingTheTransformer/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
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
import DocLLM from "./pages/posts/DocLLM";

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
  {
    path: "/blog/3",
    element: <DocLLM/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
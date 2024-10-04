import React, { Suspense } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./components/Layout";
import { appJobsPrefix } from "./constants/prefix";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${appJobsPrefix}`} />,
      },
      {
        path: `/${appJobsPrefix}/*`,
        element: (
          <Suspense fallback={<div>Loading AppJobs</div>}>
            <AppJobsLazy />
          </Suspense>
        ),
      },
      {
        path: `/${appJobsPrefix}/*`,
        element: (
          <Suspense fallback={<div>Loading AppJobs</div>}>
            <AppJobsLazy />
          </Suspense>
        ),
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}

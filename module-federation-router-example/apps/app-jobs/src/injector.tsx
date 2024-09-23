import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
interface InjectProps {
  routerType: "browser" | "hash";
  rootElement: HTMLElement;
  basePath?: string;
}

function createRouter({
  type,
  basePath,
}: {
  type: "browser" | "memory";
  basePath?: string;
}) {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createBrowserRouter(routes, { initialEntries: [basePath ?? "/"] });
  }
}
const inject = ({ routyerType, rootElement, basePath }: InjectProps) => {
  const router = createRouter({
    type: routyerType,
    basePath,
  });

  const root = createRoot(rootElement);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

import React from "react";
import "normalize.css";
import "./styles/index.scss";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FrameworkPage } from "./pages/Framework";
import { ErrorPage } from "./pages/Error";
import { LanguageProvider } from "./contexts/LanguageProvider";
import { ThemeProvider } from "./contexts/ThemeProvider";
import { MetaProvider } from "./contexts/MetaProvider";
import { PagePath } from "./constants/PagePath";
import { ResumePage } from "./pages/Resume";

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to get root DOM");
}
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: PagePath.Homepage,
    element: <FrameworkPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: PagePath.Resume, element: <ResumePage />, index: true },
      { element: <ResumePage />, index: true },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <MetaProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </MetaProvider>
    </LanguageProvider>
  </React.StrictMode>
);

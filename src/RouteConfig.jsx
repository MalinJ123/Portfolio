import React from "react";
import { createHashRouter } from "react-router-dom";

import { Start } from "./routes/Start";

// Root
import { Root } from "./routes/Root.jsx";

export const Router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/start",
        element: <Start />,
      },
    ],
  },
]);

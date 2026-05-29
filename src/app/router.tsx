import { createBrowserRouter } from "react-router-dom";
import { AppShell } from "@/components/layout/AppShell";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Contact } from "@/pages/Contact";
import { Portfolio } from "@/pages/Portfolio";
import { NotFound } from "@/pages/NotFound";
import { MyHub } from "@/pages/MyHub";
import { Journal } from "@/pages/hub/Journal";
import { Travel } from "@/pages/hub/Travel";
import { Goals } from "@/pages/hub/Goals";

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/my-hub", element: <MyHub /> },
      { path: "/my-hub/journal", element: <Journal /> },
      { path: "/my-hub/travel", element: <Travel /> },
      { path: "/my-hub/goals", element: <Goals /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

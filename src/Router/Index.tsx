import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Contact } from "../Pages/contact";

export const Routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  }
]
import { Home } from "../Home";
import { About } from "../About";
import { Contact } from "../contact";

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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./Router";

function App() {
  const router = createBrowserRouter(Routes);
  return <RouterProvider router={router} />;
}

export default App

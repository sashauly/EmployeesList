import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesList } from "./components/EmployeesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmployeesList />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

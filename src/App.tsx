import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeesList } from "./components/EmployeesList";
import EmployeeDetails from "./components/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EmployeesList />,
  },
  {
    path: "employee/:id",
    element: <EmployeeDetails />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <p>
        Data from API:{" "}
        <a href="https://jsonplaceholder.typicode.com/users">
          JSON Placeholder
        </a>
      </p>
      <p>
        Employees List &copy;
        <a href="https://github.com/sashauly">sashauly</a>, 2024
      </p>
    </>
  );
}

export default App;

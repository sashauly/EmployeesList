import { createHashRouter, RouterProvider } from "react-router-dom";
import EmployeeDetails from "./components/EmployeeDetails";
import { EmployeesList } from "./components/EmployeesList";

const router = createHashRouter([
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
        Data from API:&nbsp;
        <a href="https://jsonplaceholder.typicode.com/users">
          JSON Placeholder
        </a>
      </p>
      <p>
        Employees List &amp; Details by&nbsp;
        <a href="https://github.com/sashauly">sashauly</a>, 2024
      </p>
    </>
  );
}

export default App;

import { createBrowserRouter, redirect } from "react-router-dom";
import TaskList from "../pages/TaskList";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";
import TaskDetail from "../pages/TaskDetail";
import Trash from "../pages/Trash";
import App from "../App";

const router = createBrowserRouter([
  {
    path: '/',
    // Chua NavBar
    element: <App />,
    children: [
      {
        path: '/',
        loader: () => redirect('/task-list')
      },
      {
        path: '/task-list',
        element: <TaskList />
      },
      {
        path: '/trash',
        element: <Trash />
      },
      {
        path: '/create-task',
        element: <CreateTask />
      },
      {
        path: '/task-detail/:id',
        element: <TaskDetail />
      },
      {
        path: '/edit-task/:id',
        element: <EditTask />
      }
    ]
  },
]);

export default router;
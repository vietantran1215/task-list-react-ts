import { createBrowserRouter, redirect } from "react-router-dom";
import TaskList from "../pages/TaskList";
import CreateTask from "../pages/CreateTask";
import EditTask from "../pages/EditTask";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/task-list')
  },
  {
    path: '/task-list',
    element: <TaskList />
  },
  {
    path: '/create-task',
    element: <CreateTask />
  },
  {
    path: '/edit-task/:id',
    element: <EditTask />
  }
]);

export default router;
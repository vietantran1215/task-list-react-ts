import { TaskState } from "../redux/slices/task.slice";

// Utility
class LocalStorageUtil {
  static refreshTasks(state: TaskState) {
    localStorage.setItem("tasks", JSON.stringify(state));
  }

  static initializeTasksStorage(state: TaskState) {
    if (!localStorage.getItem("tasks")) {
      localStorage.setItem("tasks", JSON.stringify(state));
    }
  }
}

export default LocalStorageUtil;

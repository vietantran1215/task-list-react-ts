import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import TaskPayload from "../../models/TaskPayload";
import UpdateTaskStatusPayload from "../../models/UpdateTaskStatusPayload";
import LocalStorageUtil from "../../utils/local-storage.util";
import SoftDeletePayload from "../../models/SoftDeletePayload";

export interface TaskState {
  allTasks: Task[];
  taskDetailById: Task | null;
}

const initialState: TaskState = {
  // Typed array;
  // VD: Array<string> hoặc string[] là array toàn string
  // Array<Task> hoặc Task[] là array toàn Task

  // 1. localStorage.getItem('tasks') - STRING "{"allTasks":[{"title":"Hoc lap trinh Frontend","description":"Hoc HTML, CSS, JS","id":1695643216288,"status":"to-do","isDeleted":false}]}"
  // 2. Thêm as string vào để parse localStorage.getItem('tasks') về string bởi vì nó mặc định được infer type là string | null. Mình cần chuyển string | null --> string
  // 3. JSON.parse(localStorage.getItem('tasks') as string): chuyển về JSON (gồm array các objects Task) --> {"allTasks":[{"title":"Hoc lap trinh Frontend","description":"Hoc HTML, CSS, JS","id":1695643216288,"status":"to-do","isDeleted":false}]}
  // 4. Vì allTasks cũng được đọc từ phía browser, cho nên trong code sẽ chỉ hiểu được rằng nó là object thông thường. Nên mình cần as Task[] để TypeScript hiểu được nó là Array các task
  // 5. ?? [] có ý nghĩa là nếu không thành công lấy dữ liệu ra từ localStorage thì khởi tạo tasks state với allTasks là empty array
  allTasks:
    (JSON.parse(localStorage.getItem("tasks") as string)?.allTasks as Task[]) ??
    [],
  taskDetailById: null,
};

LocalStorageUtil.initializeTasksStorage(initialState);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TaskPayload>) => {
      // Lấy giá trị của Form được gửi đi từ phía TaskForm
      const taskPayload: TaskPayload = action.payload;

      // Tạo ra đối tượng Task, lấy thông tin từ form ra bằng cách spread taskPayload, đồng thời, cho giá trị mặc định cho id, status, isDeleted
      const task: Task = {
        ...taskPayload,
        id: new Date().getTime(),
        status: "to-do",
        isDeleted: false,
      };

      // Thêm vào allTasks
      // - Cập nhật lại Redux Store
      state.allTasks.push(task);
      // - Cập nhật lại localStorage
      LocalStorageUtil.refreshTasks(state);
    },
    updateTaskStatus: (
      state,
      action: PayloadAction<UpdateTaskStatusPayload>
    ) => {
      const { id, status } = action.payload;
      const taskIndex = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );
      // Thay đổi status của task
      // - Cập nhật lại Redux Store
      state.allTasks[taskIndex].status = status;
      // - Cập nhật lại localStorage
      LocalStorageUtil.refreshTasks(state);
    },
    softDeleteTask: (state, action: PayloadAction<SoftDeletePayload>) => {
      const { id, value } = action.payload;

      const taskIndex = state.allTasks.findIndex((task) => task.id === id);
      // Thay đổi status của task
      // - Cập nhật lại Redux Store

      state.allTasks[taskIndex].isDeleted = value;
      // - Cập nhật lại localStorage
      LocalStorageUtil.refreshTasks(state);
    },
    findTaskById: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const index = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );
      state.taskDetailById = state.allTasks[index];
    },
    editTask: (state, action: PayloadAction<TaskPayload>) => {
      const taskPayload: TaskPayload = action.payload;
      const { id } = taskPayload;
      const index = state.allTasks.findIndex(
        (task) => task.id === id && !task.isDeleted
      );
      state.allTasks[index] = {
        ...state.allTasks[index],
        ...taskPayload,
      };
      LocalStorageUtil.refreshTasks(state);
    },
    hardDeleteTask: (state, action: PayloadAction<number>) => {
      const id: number = action.payload;
      state.allTasks = state.allTasks.filter((task) => task.id !== id);
      LocalStorageUtil.refreshTasks(state);
    },
  },
});

export const {
  addTask,
  updateTaskStatus,
  softDeleteTask,
  findTaskById,
  editTask,
  hardDeleteTask,
} = taskSlice.actions;

export default taskSlice.reducer;

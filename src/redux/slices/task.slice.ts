import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Task from "../../models/Task";
import TaskPayload from "../../models/TaskPayload";

interface TaskState {
  allTasks: Task[];
}

const initialState: TaskState = {
  // Typed array;
  // VD: Array<string> hoặc string[] là array toàn string
  // Array<Task> hoặc Task[] là array toàn Task
  allTasks: [],
};

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
      state.allTasks.push(task);
    },
  },
});

export const { addTask } = taskSlice.actions;

export default taskSlice.reducer;

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const taskState = (state: RootState) => state.tasks;

export const allTasksSelector = createSelector(taskState, (state) => state.allTasks.filter(task => !task.isDeleted));
export const allTasksFromTrashSelector = createSelector(taskState, (state) => state.allTasks.filter(task => task.isDeleted));
export const taskDetailSelector = createSelector(taskState, (state) => state.taskDetailById);
TypeScript:
- Infer type
  - Implicit infer
  - Explicit infer
- Generics:
  - Function
  - Class
  - Interface
  - Type

CRUD tasks

Task:
- id
- title
- description
- status (to do, in progress, completed)
- isDeleted

Features:
- [x] Task list
- [ ] Search task (Optional)
- [x] Task detail
- [x] Task form
  - [x] Create a new task
  - [x] Update a task
    - [x] Update status
    - [x] Update info
- [x] Delete a task
  - [x] Soft Delete
  - [x] Hard Delete
- [x] Trash

Data storing:
- Redux store
  + Redux Core (deprecated)
  + Redux Toolkit
- Update data: dispatch hook
- Getting data: selector hook

Steps:

1. Store setup
  - Create a store
  - Provide the store to the App

2. Router setup
  - / --> /task
  - /task - TaskList - show all tasks
  - /task-detail/:id - TaskDetail - show detail of one task
  - /create-task - CreateTask - TaskForm - create a task
  - /update-task/:id - UpdateTask - TaskForm - update a task

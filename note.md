CRUD tasks

Task:
- id
- title
- description
- status (to do, in progress, completed)
- isDeleted

Features:
- [ ] Task list
- [ ] Task detail
- [ ] Task form
  - [ ] Create a new task
  - [ ] Update a task
    - [ ] Update status
    - [ ] Update info
- [ ] Delete a  task
  - [ ] Soft Delete
  - [ ] Hard Delete
- [ ] Trash

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

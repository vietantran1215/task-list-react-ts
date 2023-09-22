import React, { ChangeEvent, FormEvent, useState } from 'react';
import TaskPayload from '../models/TaskPayload';
import { useAppDispatch } from '../redux/hooks';
import { addTask } from '../redux/slices/task.slice';

interface ITaskFormProps {
  taskId?: number;
}

// Abstraction trong OOP
const FormTitle: React.FunctionComponent<ITaskFormProps> = ({ taskId }) => {
  if (!taskId) {
    return <h1>Create a new task</h1>;
  } else {
    return <h1>Edit a task</h1>
  }
}

const SubmitButton: React.FunctionComponent<ITaskFormProps> = ({ taskId }) => {
  if (!taskId) {
    return <button>Create</button>;
  } else {
    return <button>Save</button>
  }
}

const TaskForm: React.FunctionComponent<ITaskFormProps> = ({ taskId }) => {
  const dispatch = useAppDispatch();

  const [taskPayload, setTaskPayload] = useState<TaskPayload>({
    title: '',
    description: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, name } = e.target;
    setTaskPayload(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTask(taskPayload));
  }

  return <form onSubmit={handleSubmit}>
    <FormTitle taskId={taskId} />
    <div>
      <label htmlFor="title">Title</label>
      <input name='title' type="text" value={taskPayload.title} onChange={handleChange} />
    </div>
    <div>
      <label htmlFor="description">Description</label>
      <textarea name="description" id="description" value={taskPayload.description} cols={30} rows={10} onChange={handleChange}></textarea>
    </div>
    <div>
      <SubmitButton taskId={taskId} />
    </div>
  </form>;
};

export default TaskForm;

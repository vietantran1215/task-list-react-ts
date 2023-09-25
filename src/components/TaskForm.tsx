import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import TaskPayload from '../models/TaskPayload';
import { useAppDispatch } from '../redux/hooks';
import { addTask, editTask } from '../redux/slices/task.slice';
import { useNavigate } from 'react-router-dom';

interface ITaskFormProps {
  taskId?: number;
  formData?: TaskPayload;
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

const TaskForm: React.FunctionComponent<ITaskFormProps> = ({ taskId, formData }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

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

  useEffect(() => {
    if (formData) {
      setTaskPayload(formData);
    }
  }, [formData]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!taskId) {
      // Create task
      dispatch(addTask(taskPayload));
      navigate('/task-list');
    } else {
      // Edit task
      dispatch(editTask({ id: taskId as number, ...taskPayload}));
      navigate(`/task-detail/${taskId}`);
    }
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

import React from 'react';
import TaskForm from '../components/TaskForm';

interface ICreateTaskProps {
}

const CreateTask: React.FunctionComponent<ICreateTaskProps> = () => {
  return (
    <>
      <TaskForm />
    </>
  );
};

export default CreateTask;

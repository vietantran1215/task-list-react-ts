import React from 'react';
import { useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';

interface IEditTaskProps {
}

const EditTask: React.FunctionComponent<IEditTaskProps> = () => {
  const { id } = useParams();
  return (
    <>
      <TaskForm taskId={Number(id)} />
    </>
  );
};

export default EditTask;

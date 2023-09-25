import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import TaskForm from '../components/TaskForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { taskDetailSelector } from '../redux/selectors/task.selector';
import { findTaskById } from '../redux/slices/task.slice';

interface IEditTaskProps {
}

const EditTask: React.FunctionComponent<IEditTaskProps> = () => {
  const { id } = useParams();
  const task = useAppSelector(taskDetailSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(findTaskById(Number(id)));
  }, [dispatch, id]);
  return (
    <>
      <Link to={`/task-detail/${id}`}>Back to task detail</Link>

      <TaskForm taskId={Number(id)} formData={{ title: task?.title ?? '', description: task?.description ?? '' }} />
    </>
  );
};

export default EditTask;

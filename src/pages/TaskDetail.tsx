import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { findTaskById } from '../redux/slices/task.slice';
import { taskDetailSelector } from '../redux/selectors/task.selector';

interface ITaskDetailProps {
}

const TaskDetail: React.FunctionComponent<ITaskDetailProps> = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const task = useAppSelector(taskDetailSelector);
  
  useEffect(() => {
    dispatch(findTaskById(Number(id)));
  }, [dispatch, id]);

  const handleNavigateToEdit = () => {
    navigate(`/edit-task/${id}`);
  }

  return (
    <>
      <h1>{task?.title}</h1>

      <button onClick={handleNavigateToEdit}>Edit</button>

      <p><b>Id:</b></p>
      
      <p>{task?.id}</p>

      <p><b>Status:</b></p>
      
      <p>{task?.status}</p>

      <p><b>Description:</b></p>

      <p>{task?.description}</p>
    </>
  );
};

export default TaskDetail;

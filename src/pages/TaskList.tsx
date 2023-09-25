import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router-dom';
import { allTasksSelector } from '../redux/selectors/task.selector';
import Status from '../models/Status';
import { softDeleteTask, updateTaskStatus } from '../redux/slices/task.slice';

interface ITaskListProps {
}

const TaskList: React.FunctionComponent<ITaskListProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const tasks = useAppSelector(allTasksSelector);

  // Infer type parameter của handleUpdateStatus
  const handleUpdateStatus = (id: number, status: Status) => {
    // id: update cho task nao
    // status: status moi cua task
    dispatch(updateTaskStatus({
      id,
      status
    }));
  }

  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      dispatch(softDeleteTask({ id, value: true}));
    }
  }

  const handleShowingDetail = (id: number) => {
    // dispatch(softDeleteTask(id));
    navigate(`/task-detail/${id}`);
  }

  return (<>
    <h1>Task list</h1>

    {/* {JSON.stringify(tasks)} */}

    <table border={1} style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>
              <select value={task.status} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleUpdateStatus(task.id, e.target.value as Status)}>
                <option value="to-do">To do</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </td>
            <td>
              <button onClick={() => handleShowingDetail(task.id)}>Details</button>
            </td>
            <td>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>);
};

export default TaskList;

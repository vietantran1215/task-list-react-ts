import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { allTasksFromTrashSelector } from '../redux/selectors/task.selector';
import { hardDeleteTask, softDeleteTask } from '../redux/slices/task.slice';

interface ITrashProps {
}

const Trash: React.FunctionComponent<ITrashProps> = () => {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(allTasksFromTrashSelector);

  const handleRestore = (id: number) => {
    dispatch(softDeleteTask({ id, value: false}));
  }

  const handleDelete = (id: number) => {
    const isConfirmed = window.confirm('Are you sure you want to delete? This cannot be undone.');
    if (isConfirmed) {
      dispatch(hardDeleteTask(id));
    }
  }

  return (<>
    <h1>Trash</h1>

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
              <select value={task.status} disabled>
                <option value="to-do">To do</option>
                <option value="in-progress">In progress</option>
                <option value="completed">Completed</option>
              </select>
            </td>
            <td>
              <button onClick={() => handleRestore(task.id)}>Restore</button>
            </td>
            <td>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>)
};

export default Trash;

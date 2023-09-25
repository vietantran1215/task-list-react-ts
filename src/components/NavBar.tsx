import * as React from 'react';
import { Link } from 'react-router-dom';

interface INavBarProps {
}

const NavBar: React.FunctionComponent<INavBarProps> = () => {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link to='/task-list'>Task list</Link>
      <Link to='/create-task'>Create a new task</Link>
      <Link to='/trash'>Trash</Link>
    </div>
  );
};

export default NavBar;

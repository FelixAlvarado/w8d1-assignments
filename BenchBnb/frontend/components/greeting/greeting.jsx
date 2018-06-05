import React from 'React';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {

  if (currentUser) {
    return (
      <div>
      <h1>Welcome {currentUser.username}</h1>
      <button onClick={() => logout()}>Logout</button>
      </div>
    );
  }
  return (
    <div>
      <ul>
        <li><Link to='/signup'>Signup</Link></li>
        <li><Link to='/login'>Login</Link></li>
    </ul>
    </div>
  );
};

export default Greeting;

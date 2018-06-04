import React from 'React';

export const Greeting = ({currentUser, logout}) => {

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
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
    </div>
  );
};

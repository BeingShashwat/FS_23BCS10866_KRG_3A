import React, { useState } from 'react';

function UserProfile({ username }) {
  return (
    <p>Hello, {username}</p>
  );
}

function Icon({ username }) {
  return (
    <UserProfile username={username} />
  );
}

function Header({ username }) {
  return (
    <Icon username={username} />
  );
}

function App() {
  const [username, setUsername] = useState('Shashwat Mishra');

  return (
    <Header username={username} />
  );
}

export default App;
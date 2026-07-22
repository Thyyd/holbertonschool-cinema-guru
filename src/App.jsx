import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUsername, setUserUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    axios.post('/api/auth/', {}, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setIsLoggedIn(true);
        setUserUsername(response.data.username);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      {isLoggedIn ?
        <Dashboard />:
        <Authentication />
      }
    </div>
  )
}

export default App

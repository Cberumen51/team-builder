import React, {useState} from 'react';
import './App.css';
import Form from './Components/Form';

function App() {
  const [team, setTeam] = useState([])

  const addNewMate = team => {
    const newMate ={
      id: Date.now(),
      name: team.name,
      email: team.email,
      role: team.role
    }
    setTeam(...team, newMate)

  }
  return (
    <div className="App">
      <h1>The Team</h1>
      <Form addNewMate={addNewMate} />
    </div>
  );
}

export default App;

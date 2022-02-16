import './App.css';
import Multipleinputs from './component/form/Multipleinputs';
import { useState } from 'react';
import { Student } from './component/student';

function App() {
  const [registeredUsers, setRegisteredUsers] = useState([])
  return (
    <div>
      <Multipleinputs setRegisteredUsers={setRegisteredUsers} />

      {registeredUsers.length !== 0 &&
        <h1>Enrolled Student</h1>

      }
      {
        registeredUsers.map((user) => {
          return <Student key={user.email} userData={user} />
        }
        )
      }
    </div>
  );
}

export default App;
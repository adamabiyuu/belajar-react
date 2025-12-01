import { useState } from 'react'
import Header from './components/Header';


function App() {
  const students = ["adam", "wili", "amil"];
  const [likes, setLikes] = useState(0);

  function HandleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <Header name="abiyu" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      <button onClick={HandleClick}>Like ({likes})</button>
    </>
  );
  
}

export default App

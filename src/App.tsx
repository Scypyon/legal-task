import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const App: React.FC = () => {

  const [name, setName] = useState();
  const [goNext, setGoNext] = useState(false);

  const sendMyName = () => {
    localStorage.setItem("Name", JSON.stringify(name));
    setGoNext(true);
  }
  return (
    <>
      {goNext && <Redirect to="/chooseData" />}
      <h1>Cześć ! Jak się nazywasz ?</h1>
      <input onChange={e => setName(e.target.value)} type="text" />
      <button onClick={sendMyName}>Done</button>
    </>
  );
}

export default App;

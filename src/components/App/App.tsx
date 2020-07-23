import React,{FC}  from 'react';
import './App.css';
import Recorder from '../Recorder';
import Calendar from '../Calendar';

const App: FC = () => {
  return(
    <div className="App">
      <Recorder />
      <Calendar />
    </div>
  )
}

export default App;

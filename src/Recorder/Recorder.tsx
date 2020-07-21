import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './Recorder.css'
import { start } from '../redux/recorder';

const Recorder = () => {

  const dispatch = useDispatch()

  const dateStart = useSelector()

  const handleClick = () => {
    dispatch(start())
  }

  return (
  <div className="recorder">
    <button onClick={handleClick} className="recorder-record">
      <span></span>
    </button>
    <div className="recorder-counter">00:00:00</div>
  </div>)
}

export default Recorder
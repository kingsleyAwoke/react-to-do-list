import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete_icon.png';

const Task = ({text}) => {
  return (
    <>
      <div className="flex my-3 items-center gap-2">
        <div className="flex flex-1 items-center cursor-pointer">
          <img src={tick} alt="A tick image" className="w-7" />
          <p className="text-slate-700 ml-4">{text}</p>
        </div>
        
        <img src={delete_icon} alt="A danger icon" className="w-3.5 cursor-pointer" />
      </div>
    </>
  )
}

export default Task
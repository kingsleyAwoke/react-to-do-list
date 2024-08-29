import React from 'react';
import todo_icon from "../assets/todo_icon.png";
import Task from './Task';

const Todo = () => {
  return (
    <>
      <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
        <div className="flex items-center mt-7 gap-12">
          <img className="w-8" src={todo_icon} alt="To do list icon"/>
         <h1 className="text-3xl font-semibold">Todo list</h1>
        </div>
        
        <div className="flex items-center my-7 rounded-full bg-gray-200">
          <input type="text" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" placeholder="Enter your task" />
          <button className="border-0 rounded-full bg-orange-600 w-32 h-14 text-white font-medium text-md cursor-pointer">Add +</button>
        </div>
         <Task text="Build something"/>
        <div>
          
        </div>
      </div>
    </>
  )
}

export default Todo
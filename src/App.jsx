import React from 'react';
import Todo from './Components/Todo';

const App = props => {
  return (
    <>
      <div className="bg-stone-600 grid py-4 min-h-screen">
        <Todo text="Build something"/>
      </div>
    </>
  )
}
export default App
import React from 'react';
//import Table from './table'
import MakeList from './table'
import './App.css';

function App() {

  const characters = [
     {
       name: 'Charlie',
       job: 'Janitor',
       emp_id: '001',
     },
     {
       name: 'Mac',
       job: 'Bouncer',
       emp_id: '029',
     },
     {
       name: 'Dee',
       job: 'Aspring actress',
       emp_id: '030',
     },
     {
       name: 'Dennis',
       job: 'Bartender',
       emp_id: '021',
     },
   ]

  function Greeting(){
    const elem = (
      <div id='footage'>
        <h2 className ='title' id = '1'> Smaller text</h2>
        <h1 className ='title' id = '2'> hi there </h1>
      </div>
    );
    return elem;
  }

  return (
    <div className="App">
      <MakeList TableData = {characters}/>
      <Greeting />
      <p> { Greeting().props.children[1].props.id } </p>
    </div>
  );
}

export default App;

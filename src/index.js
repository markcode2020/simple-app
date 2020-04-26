import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function tick(){
  function DisplayDate(){
    const t = Date();
    const a = t.toString();
    const elem = <div> {a}</div>
    return elem
  }

  ReactDOM.render(
    <DisplayDate />,
    document.getElementById('clock')
  );

}
setInterval(tick, 1000);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

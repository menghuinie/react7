import React from 'react';
//import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import './my-sass.scss';

function FuncForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

const root111form= ReactDOM.createRoot(document.getElementById('id111form'));
root111form.render(<FuncForm />);

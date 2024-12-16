import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';

import Router6 from "./route/Router";
import W3 from "./util/W3.js";

export default function App() {
  return (
    <>
      {/* <HtmlHead1 />  */}
      <Router6 />
      <hr/>
      <W3 />

    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
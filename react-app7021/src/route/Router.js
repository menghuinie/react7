import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from './RouterConfig';
import Layout from "../page/Layout";
import Home from "../page/Home";
import Blogs from "../page/Blogs";
import Contact from "../page/Contact";
import NoPage from "../page/NoPage";
import Neo from "../page/Neo";

function HtmlHead1menu() {
  return ( 
    <>   
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </>  
  );
}


function HtmlHead2accordion() {
  return ( 
    <>   
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </>  
  );
}


function Router61() {       // function name MUST be capital letter.
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />          
            <Route path="*" element={<NoPage />} />
          <Route path="neo" element={<Neo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}


export default function Router6() {
  return (
    <>
      {/* <HtmlHead1menu />  */}
      <HtmlHead2accordion />
      <Router61 />
    </>
  );
}
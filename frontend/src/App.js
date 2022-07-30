import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login';
import BooksFunction from './components/Books';
import RoomsFunction from './components/Rooms';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
} from 'mdb-react-ui-kit';
function App() {
  return (
    <div className="App">
      <TextLinkExample />
     
        {/* <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' /> */}

      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />
        } />
        <Route path="/book" element={<BooksFunction />
        } />
        <Route path="/room" element={<RoomsFunction />
        } />
      </Routes >
    </div >
  );
}

export default App;



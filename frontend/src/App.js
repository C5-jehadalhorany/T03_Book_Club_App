import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from './components/Navbar';

import Register from './components/Register';
import Login from './components/Login';
import BooksFunction from './components/Books';
import RoomsFunction from './components/Rooms';
function App() {
  return (
    <div className="App">
      <TextLinkExample />
      <Register />
      <Login />
      <BooksFunction/>
      <RoomsFunction/>
    </div >
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from './components/Navbar';

import Register from './components/Register';
import Login from './components/Login';
import BooksFunction from './components/Books';

function App() {
  return (
    <div className="App">
      <TextLinkExample />
      <Register />
      <Login />
      <BooksFunction/>
    </div >
  );
}

export default App;

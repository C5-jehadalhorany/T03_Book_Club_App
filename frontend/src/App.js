import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TextLinkExample from './components/Navbar';

import BasicExample from './components/Register';
// import SignUp from './components/Login';
import SignUp from './components/Register';


function App() {
  return (
    <div className="App">
      <TextLinkExample />
      {/* <BasicExample /> */}
      <SignUp/>
    </div >
  );
}

export default App;

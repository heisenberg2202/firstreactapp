import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ModeToggler from './components/ModeToggler';
import ButtonExample from './components/ButtonExample';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWIthFocusButton';
import Contact from './Contact';
import Homepage from './Homepage';
import { Routes, Route, Link } from "react-router-dom";


function App() {


  return (
    <div>
      <Header name='Anna' color='purple' />



      <Main greet="Howdy" />

      <ButtonExample />

      <ModeToggler />

      <InputComponent />

      <RegisterForm />

      <TextInputWithFocusButton />


      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>


  );
};

export default App;

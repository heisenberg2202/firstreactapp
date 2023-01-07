import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ModeToggler from './components/ModeToggler';
import ButtonExample from './components/ButtonExample';
function App() {

  
  return (
    <div>
      <Header name='Anna' color='purple' />
      <Main greet="Howdy" />

      <ButtonExample />

      <ModeToggler />
  

    </div>


  );
};

export default App;

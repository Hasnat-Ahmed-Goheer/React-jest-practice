import logo from './logo.svg';
import './App.css';
import Greetings from './components/Greetings';
import Async from './components/Async';

// just add --verbose in the package.json file in the test script to see the verbose output

function App() {
  return (
    <div className="App">
      <Greetings />
      <h3>Learn React</h3>

      <Async/>
    </div>
  );
}

export default App;

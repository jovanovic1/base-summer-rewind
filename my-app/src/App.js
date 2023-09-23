import logo from './logo.svg';
import './App.css';
import ConcentricCircles from './Components/ConcentricCircles';
import RewindLevel from './Components/RewindLevel';
import RewindGame from './Components/RewindGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RewindGame/>
      </header>
    </div>
  );
}

export default App;

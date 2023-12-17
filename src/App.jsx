
import './App.css'
import DigitalClock from './components/Header/DigitalClock';
import ReactCalCulator from './components/Header/ReactCalculator';

function App() {
  return (
    <div className="py-10 flex items-center justify-center">
      <div>
        <DigitalClock></DigitalClock>
        
      <ReactCalCulator></ReactCalCulator>
      </div>
    </div>
  );
}

export default App

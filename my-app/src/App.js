import './App.css';
import '../src/components/accordian/index.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />
      {/*Random Color Component */}
      <RandomColor />
      {/*Star Component*/}
      <StarRating />

    </div>
  );
}

export default App;

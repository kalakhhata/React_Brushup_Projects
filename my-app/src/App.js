import './App.css';
import '../src/components/accordian/index.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian />
      {/*Random Color Component */}
      <RandomColor />
      {/*Star Component*/}
      <StarRating />
      {/*Image Slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"4"} page={"1"} />
      {/*Load More Button */}
      <LoadMore />
    </div>
  );
}

export default App;

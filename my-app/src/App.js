import './App.css';
import '../src/components/accordian/index.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import TreeMenu from './components/tree-view';
import menus from './components/tree-view/data';
import QRGenerator from './components/qr-generator';
import Mode from './components/light-dark-mode';


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
      {/* Tree View */}
      <TreeMenu menus={menus} />
      {/* QR Code */}
      <QRGenerator />
      {/* Dark Light Mode */}
      <Mode />
    </div>
  );
}

export default App;

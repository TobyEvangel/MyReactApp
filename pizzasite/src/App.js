import logo from './logo.svg';
import './App.css';
import Header from './Header.js'
import Slider from './Slider.js'
import About from './About';
import PizzaTypes from './PizzaTypes';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <About/>
      <PizzaTypes/>
      <Footer/>
    </div>
  );
}

export default App;

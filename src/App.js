import './App.css';
import Homepage from './Screens/Homepage';
import AboutUs from './Screens/AboutUs';
import Agronomy from './Screens/Agronomy';
import Livestock from './Screens/Livestock';
import DirectBuying from './Screens/DirectBuying';
import CommercialPremise from './Screens/CommercialPremise';
import Contact from './Screens/Contact';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Homepage/>
      <AboutUs/>
      <div className="SidebySide">
        <Agronomy/>
        <Livestock/>
      </div>
      <DirectBuying/>
      <CommercialPremise/>
      <Contact/>
    </div>
  );
}

export default App;
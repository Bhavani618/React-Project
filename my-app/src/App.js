import './App.css';
import BestSale from './Components/BestSale_Section/BestSale';
import BigDiscountSection from './Components/BigDiscount_Section/BigDiscountSection';
import BigDiscountSectionList from './Components/BigDiscount_Section/BigDiscountSectionList';
import CardContainer from './Components/Cards/CardContainer';
import Footer from './Components/Footer_Section/Footer';
import SliderComponent from './Components/Home/SliderComponent';
import Navbar from './Components/Navbar/Navbar';
import ArrivalList from './Components/NewArrival_Section/ArrivalList';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <SliderComponent/>
     <CardContainer/>
     <BigDiscountSectionList/>
     <ArrivalList />
     <BestSale/>
     <Footer/>
    </div>
  );
}

export default App;

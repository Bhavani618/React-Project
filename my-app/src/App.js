import './App.css';
import BestSale from './Components/BestSale_Section/BestSale';
import BigDiscountSectionList from './Components/BigDiscount_Section/BigDiscountSectionList';
import CardContainer from './Components/Cards/CardContainer';
import Footer from './Components/Footer_Section/Footer';
import SliderComponent from './Components/Home/SliderComponent';
import Navbar from './Components/Navbar/Navbar';
import ArrivalList from './Components/NewArrival_Section/ArrivalList';
import Cart from './Components/Cart/Cart';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StorePage from './Components/Storepage_Section/StorePage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <SliderComponent />
              <CardContainer />
              <BigDiscountSectionList />
              <ArrivalList />
              <BestSale />
            </>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<StorePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route   } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import { Bookings } from './components/Bookings';
import Register from './components/Register';
import Flights from './components/Flights';
import Payout from './components/Payout';


function App() {
  return (
  
    <Routes>
         <Route path="/*" element={<Home/>} />
         <Route path="/bookings" element={<Bookings />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/flights" element={<Flights/>}/>
          <Route path="/checkout" element={<Payout/>}/>
         



    
    
    </Routes>
  );
}

export default App;

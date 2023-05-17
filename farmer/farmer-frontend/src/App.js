import Navbar from './components/Navbar';
import Home from './components/Home';
import Sell from './components/Sell';
import Profile from './components/Profile';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </div>
   
  )

}
export default App;

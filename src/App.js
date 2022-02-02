// context
import GetApiContext from './context/GetApiContext';

// component
import HomePage from './components/HomePage';
import Coins from './components/Coins';
import Navbar from './components/Navbar';

// router
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <GetApiContext>
      <Navbar />
      <Routes>
        <Route path="/coins" element={<Coins />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </GetApiContext>
  );
}

export default App;

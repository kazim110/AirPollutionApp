import { Route, Routes } from 'react-router';
import './App.css';
import Pollutions from './components/Pollutions';
import Navbar from './components/Navbar';
import PollutionsDetails from './components/PollutionsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Pollutions />} />
          <Route path="/pollutionsDetails" element={<PollutionsDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

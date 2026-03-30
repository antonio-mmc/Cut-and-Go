import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './views/Welcome';
import Login from './views/Login';
import Register from './views/Register';
import Analysis from './views/Analysis';
import Selection from './views/Selection';
import ManualSelection from './views/ManualSelection';
import Simulation from './views/Simulation';
import Payment from './views/Payment';
import Execution from './views/Execution';
import Feedback from './views/Feedback';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-white font-sans">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/selection" element={<Selection />} />
          <Route path="/manual" element={<ManualSelection />} />
          <Route path="/simulation" element={<Simulation />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/execution" element={<Execution />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Auth from './pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Auth />} />
        <Route path='/dashboard' element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

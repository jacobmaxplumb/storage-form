import logo from './logo.svg';
import './App.css';
import { useSimple } from './hooks/useSimple';
import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Name Form</button>
        <button onClick={() => navigate('/cars')}>Car Form</button>
      </div>
      <Routes>
        <Route path="/" element={<div>Name Form</div>} />
        <Route path="/cars" element={<div>Car Form</div>} />
      </Routes>
      <p>something else</p>
    </div>
  );
}

export default App;

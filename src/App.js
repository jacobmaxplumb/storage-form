import logo from './logo.svg';
import './App.css';
import { useSimple } from './hooks/useSimple';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { NameForm } from './components/NameForm';
import { CarForm } from './components/CarForm';

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Name Form</button>
        <button onClick={() => navigate('/cars')}>Car Form</button>
      </div>
      <Routes>
        <Route path="/" element={<NameForm />} />
        <Route path="/cars" element={<CarForm />} />
      </Routes>
      <p>something else</p>
    </div>
  );
}

export default App;

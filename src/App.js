import logo from './logo.svg';
import './App.css';
import { useSimple } from './hooks/useSimple';

function App() {
  const [text, setText, logText] = useSimple('');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={logText}>See Value</button>
    </div>
  );
}

export default App;

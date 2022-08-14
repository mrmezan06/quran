import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sura from './pages/Sura';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

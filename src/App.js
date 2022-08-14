import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sura from './pages/Sura';
import SingleSura from './pages/SingleSura';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sura />} />
        <Route path="/singleSura/:suraNo" element={<SingleSura />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

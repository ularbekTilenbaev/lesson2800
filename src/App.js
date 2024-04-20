import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/hero' element={<Hero/>}/>
      </Routes>
    </div>
  );
}

export default App;

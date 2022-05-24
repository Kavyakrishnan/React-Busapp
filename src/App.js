import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addbus from './Component/Addbus';
import Searchbus from './Component/Searchbus';
import Header from './Component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/"exact element={<Addbus/>}/>
        <Route path="/search"exact element={<Searchbus/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;

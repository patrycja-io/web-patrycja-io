import {BrowserRouter, Route, Routes } from 'react-router-dom'

//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

import './App.css'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="create" element={<Shop/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App
import {BrowserRouter, Route, Routes } from 'react-router-dom'

//page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Resources from './pages/resources/Resources'
import ReactLibraires from './pages/resources/ReactLibraires'
import Footer from './components/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="resources" element={<Resources/>}/>
         <Route path="resources/reactlibraries" element={<ReactLibraires/>}/>
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App
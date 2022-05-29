import {BrowserRouter, Route, Routes } from 'react-router-dom'

//page components
import Navbar from './components/navBar'
import Home from './pages/home/Home'
import Resources from './pages/resources/Resources'
import ReactLibraires from './pages/resources/ReactLibraires'
import TailwindUIs from './pages/resources/TailwindUIs'
import Footer from './components/Footer'
import Collabs from './pages/collabs/Collabs'
import AboutMe from './pages/aboutme/AboutMe'


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
         <Route path="resources/tailwinduis" element={<TailwindUIs/>}/>
         <Route path="collabs" element={<Collabs/>}/>
         <Route path="aboutme" element={<AboutMe/>}/>
        
       </Routes>
       <Footer/>
       </BrowserRouter>
    </div>
  );
}

export default App
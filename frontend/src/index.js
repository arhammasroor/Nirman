import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import HeatMap from './landing_page/heatmap/HeatMap';
import HomePage from './landing_page/home/HomePage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import NewsPage from './landing_page/news/NewsPage';
import Notfound from './landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/news' element={<NewsPage/>}/>
    <Route path='/*' element={<Notfound/>}/>
    </Routes>
    <Footer/>
    {/* <HeatMap/> */}
   {/* <div style={{ width: "100%", overflow: "hidden", margin: "20px 0"}}>
  <video
    style={{ width: "100%", height: "300px", objectFit: "cover", display: "block" }}
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="media/videos/newcity.mp4" type="video/mp4" />
  </video>
</div> */}
  </BrowserRouter>
);


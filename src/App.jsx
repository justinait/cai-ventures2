import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Services from './page/Services/Services';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import Faq from './page/Faq/Faq';
import Blog from './page/Blog/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import Article from './components/Article/Article';

import ErrorConection from './components/Error/ErrorConection';
import NoEncontrada from './components/Error/NoEncontrada';

import RedesFlotantes from './components/Redes/Redes';
import Privacy from './page/Privacy/Privacy';
import WhatsApp from './components/WhatsApp/WhatsApp';
import Pagos from './components/Pagos/Pagos';
import CheckScroll from './utils/CheckScroll';


function App() {
  
  
  return (
    <BrowserRouter>
      <NavBar/>
      <RedesFlotantes />
      <CheckScroll/>
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog/:id' element= {<Article />} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/Pagos' element={<Pagos />} />
        <Route path='/privacy' element={<Privacy/>} />

        <Route path='/error' element={<ErrorConection />} />
        <Route path='*' element={<NoEncontrada />} />
      </Routes>
      <WhatsApp />
      <Footer/>
    </BrowserRouter>
  );
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home/Home';
import Services from './page/Services/Services';
import Contact from './page/Contact/Contact';
import About from './page/About/About';
import Faq from './page/Faq/Faq';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/navbar';
import Footer from './components/Footer/Footer';
import Blog from './page/Blog/Blog';

import RedesFlotantes from './components/Redes/Redes';

import WhatsApp from './components/WhatsApp/WhatsApp';




function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <RedesFlotantes />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/faq' element={<Faq/>}/>
      </Routes>
      <WhatsApp />
      <Footer/>
    </BrowserRouter>
  );
}

export default App

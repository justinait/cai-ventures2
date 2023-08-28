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
<<<<<<< HEAD
<<<<<<< HEAD
import RedesFlotantes from './components/Redes/Redes';
=======
import WhatsApp from './components/WhatsApp/WhatsApp';
>>>>>>> 7f2712a1b007ffcd5ae8bdf4652472f81eeb87ca
=======
import RedesFlotantes from './components/Redes/Redes';
import WhatsApp from './components/WhatsApp/WhatsApp';
>>>>>>> a00e039619f1391ec9ccdce072d5ee70acb8386d



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
        <Route path='/faq' element={<Faq/>}/>
      </Routes>
      <WhatsApp />
      <Footer/>
    </BrowserRouter>
  );
}

export default App

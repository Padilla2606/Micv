
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { Equipo } from './SubComponents/Equipo';
import { Contacto } from './Components/Contacto';
import { Boton_api_whatsapp } from './SubComponents/Botonapiwhatsapp';
import { Contenedor } from './Components/Contenedor';



function App(){
  
  return (
    <BrowserRouter>
    <Header/>

    <Routes>
      <Route path='/' element={<Contenedor/>}/>
      <Route path="Contacto" element={<Contacto/>} />
      <Route path='Equipo' element={<Equipo/>} />
    </Routes>
    

    <Footer/>
    <Boton_api_whatsapp/>

    
    
    </BrowserRouter>
    
    
    
  );
}

 
  
export default App;

import React, {Fragment, useState} from 'react';
import Formulario from './elementos/Formulario.js';
import Header from './elementos/Header.js';
import { BrowserRouter, Link, Route, Switch, Routes } from "react-router-dom"; 
import Admin from './elementos/Admin.js';

function App() { 
  //useState
  return ( 
  //FRAGMENT -> Reemplaza a los elementos html para no agregar código extra
    
    <Fragment> 
      
      <Header //de esta forma llamamos al componente Header.js y podemos usar sus propiedades
        //crear variable + información que será usada en mi html
        titulo="Iniciar sesión"
        descripcion="Validación de sesión administrador"
      />

    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<Formulario />} />
    </Routes>

    </Fragment>
    
  );
}

export default App;

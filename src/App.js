import React, {Fragment, useState} from 'react';
import Formulario from './elementos/Formulario.js';
import Header from './elementos/Header.js';

function App() { 
  //useState
  const [usuario, guardarUsuario] = useState('');
  const [tipoUsuario, guardarTipoU] = useState('');
  const [contrasena, guardarContrasena] = useState('');


  return ( 
  //FRAGMENT -> Reemplaza a los elementos html para no agregar código extra
    <Fragment> 
      <Header //de esta forma llamamos al componente Header.js y podemos usar sus propiedades
        //crear variable + información que será usada en mi html
        titulo="Iniciar sesión"
        descripcion="Validación de sesión administrador"
      />
      <Header />

      <div className='container'>
        <Formulario 
          usuario={usuario}
          guardarUsuario={guardarUsuario}
          tipoUsuario={tipoUsuario}
          guardarTipoU={guardarTipoU}
          contrasena={contrasena}
          guardarContrasena={guardarContrasena}
        />
      </div>
    </Fragment>
  );
}

export default App;

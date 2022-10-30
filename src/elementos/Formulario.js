import React, { Fragment, useState } from "react"; 

const Formulario = ({usuario, guardarUsuario, tipoUsuario, guardarTipoU, contrasena, guardarContrasena}) => {

    //definir el useState
        //en este caso definimos un valor (mail) y la funcion que se le ejecutará (guardarUsuario)
    
    /* En informatica la info va del padre al hijo pero no V/V, por lo que este comando debe ir en App.js para ser usado por más elementos
    const [usuario, guardarUsuario] = useState('');
    */
    /* Forma 1 leerUsuario
    const leerUsuario = (e) => {
        console.log('Ingresando usuario');

        //luego de leer el usuario ejecutamos guardarUsuario
        
    }
    */

    //definir state de error
    const [error, guardarError] = useState(false);


    //ENTRAR
    const presionarEntrar = (e) => {
        e.preventDefault();
        

           //validar datos
        if (contrasena == '' || usuario == '' || tipoUsuario == '') {
            //alert("Ingresa información en todas las casillas");
            guardarError(true);
        } else {
            console.log("Enviando sesión");
            guardarError(false);
        }    
    }

    return ( 
        <Fragment>
            <form onSubmit={ presionarEntrar }>
                {usuario}  
                {contrasena}
                <h1>ADMIN FOODDY</h1>
                <div className="row">
                    <div>
                        <label>Usuario</label>
                        <input 
                            className="u-full-width" 
                            type="string" 
                            placeholder="admin_starbucks1" 
                            
                            //onChange, onClick, etc tiene diferentes funciones al ingresar información a la barra
                            //Forma1: onChange={ leerUsuario } //leerUsuario es la funcion que definiremos arriba
                            //Forma2
                            onChange={ e => guardarUsuario(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Tipo de usuario</label>
                        <select 
                            className="u-full-width"
                            onChange={ e => guardarTipoU(e.target.value)}

                        >
                            <option value={''}>Seleccionar</option>
                            <option value={'DT'}>Dueño de tienda</option>
                            <option value={'JL'}>Jefe de local</option>
                            <option value={'CJ'}>Cajero</option>
                            <option value={'AY'}>Ayudante</option>
                        </select>
                    </div>
                    <div>
                        <label>Contraseña</label>
                        <input 
                            className="u-full-width" 
                            type="string" 
                            placeholder="*******" 
                            onChange={ e => guardarContrasena(e.target.value)}

                            
                            //onChange, onClick, etc tiene diferentes funciones al ingresar información a la barra
                            //Forma1: onChange={ leerUsuario } //leerUsuario es la funcion que definiremos arriba
                            //Forma2
                            //onChange={ e => guardarContraseña(e.target.value)}
                        />
                    </div>
                    <div>
                        <input 
                            type="submit" 
                            value="Entrar" 
                            className="button-primary u-full-width" 
                        />
                    </div>
                </div>
            </form>
            { (error) ? <p className="error">Ingresa información en todos los campos</p> : null }

        </Fragment>
    );
}
 
export default Formulario;
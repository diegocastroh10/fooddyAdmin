import React from 'react'

//uso de props -> permite crear una variable que contenga los atributos de origen .titulo
/*
function Header(props){
    console.log(props);
    return (
        //Agregar props como texto
        <Fragment>
            <h1>{ props.titulo }</h1>
        </Fragment>
        
    )
}
*/

//funciones cortas -> presionar sfc y creará automático
const Header = () => {
    return (
        //<h1>{ total }</h1>
        <h1>ADMIN FOODDY</h1>
     );
};
 

export default Header;
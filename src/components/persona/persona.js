import React from 'react';

const persona = (props) => {
    return (
        <div style={{backgroundColor:"blue", padding:"40px", margin:"40px"}}>
            <h1 style={{backgroundColor:"white"}}>{props.datos.nombre}</h1>
            <h3 style={{backgroundColor:"white"}}>{props.datos.apellido}</h3>
            <h4 style={{backgroundColor:"white"}}>{props.datos.edad}</h4>
        </div>
    );
}

export default persona;
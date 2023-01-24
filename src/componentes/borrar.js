import React from "react";
import '../estilos/Borrar.css'

const Borrar = (props)=>(
<div className="Borrar" 
onClick={props.borrado}>
    {props.children}
</div>
)

export default Borrar;
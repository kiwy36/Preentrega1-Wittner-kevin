import { useState } from 'react';
import './Boton.css';

const BotonContador = ()=> {
    const [contador, setContador] = useState(0);
    return (
    <div>
        <h1>tienes {contador} cosos marcados</h1>
        <button onClick={()=>setContador(contador+1)}> Sumar una unidad</button>
        <button onClick={()=>setContador(contador-1)}> restar una unidad</button>
        <button onClick={()=>setContador(0)}> re iniciar </button>
    </div>
    );
}

export default BotonContador;

//Importamos componentes necesarios
import React from 'react';
import { useConsejo } from './UseConsejo';   
import divisorEscritorio from '../imagenes/pattern-divider-desktop.svg';
import divisorMovil from '../imagenes/pattern-divider-mobile.svg';
import dado from '../imagenes/icon-dice.svg';


//Componente principal
export const ConsejoCard = () => {
    const { consejo, obtenerConsejo } = useConsejo();  

     //Retorno del componente HTML que se vera en la pagina
    return (
        <div className='tarjeta'>
            <p>CONSEJO #{consejo.id}</p>
            <h2>"{consejo.advice}"</h2>
            <img src={divisorEscritorio} className="divisor-escritorio" alt="divisor" />
            <img src={divisorMovil} className="divisor-movil" alt="divisor" />
            <div className="dado" onClick={obtenerConsejo}>
                <img src={dado} alt="dado" />
            </div>
        </div>
    );
};

//Exportamos el componente
export default ConsejoCard;

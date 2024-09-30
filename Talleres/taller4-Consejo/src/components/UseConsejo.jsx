//Importamos componentes necesarios
import { useState, useEffect } from 'react';
import axios from 'axios';


//Componente principal
export const useConsejo = () => {
    const [consejo, setConsejo] = useState({ id: 0, advice: '' });

    //Funcion para obtener un consejo desde la API
    const obtenerConsejo = async () => {
        try {
            const respuesta = await axios.get('https://api.adviceslip.com/advice');
            const datoConsejo = respuesta.data.slip;
            setConsejo(datoConsejo);
        } catch (error) {
            console.error("Lo siento, no fue posible obtener el consejo", error);
        }
    };

    useEffect(() => {
        obtenerConsejo();
    }, []);


   //Retornamos el componente
    return { consejo, obtenerConsejo };
};

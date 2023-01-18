import React, { useState, useEffect } from 'react'
import { useContexto } from './contexto'



const Cronometro = () => {
    
    const { compruebaRespuesta } = useContexto()
    const [tiempo, settiempo] = useState(10)
    
    useEffect(() => {
        if(tiempo===0){
           compruebaRespuesta()
           settiempo(10)
        }      
        if (!tiempo) return;
    
        const intervalId = setInterval(() => {
          settiempo(tiempo - 1);
        }, 1000);
        return () => clearInterval(intervalId);
      }, [tiempo, compruebaRespuesta]);
    
    return (
        <div>
            {    
                (tiempo === 0)
                    ? null
                    : <h2>Tiempo restante: {tiempo} segundos</h2>
                }
        </div>
    );
}

export default Cronometro;

import React, { useEffect, useState } from 'react';
import { useContexto } from './contexto';
import Cronometro from './cronometro';

const MuestraBandera = () => {

    const { generaPaises, bandera } = useContexto()
    
    useEffect(() => {
        generaPaises()
    }, []);

        


    return (
        <div style={{display: "flex", justifyContent: "center", padding: "1rem", flexDirection: "column", alignItems: "center"}} >
            <h3>¿De qué lugar es esta bandera?</h3>
            { 
                bandera ? 
                <div>
                <img style={{width: "20rem", border: "1px solid #000"}} alt="bandera" src={`https://flagicons.lipis.dev/flags/4x3/${bandera.code}.svg`}></img>
                </div>
                : null
            }
      
        </div>
    );
}

export default MuestraBandera;


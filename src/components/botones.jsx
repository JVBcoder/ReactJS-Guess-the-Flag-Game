import React from 'react';
import { useContexto } from './contexto';
import { Button } from '@mui/material'
import Resultado from './resultado';
import Cronometro from './cronometro';



const Botones = () => {
    
    const { paises, compruebaRespuesta, haClickado } = useContexto()
    
    
    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            {   
                haClickado ? <Resultado></Resultado> 
                : <div>
                <Cronometro></Cronometro>
                <div style={{
                display: "grid", 
                gridGap: "1rem",
                gridTemplateColumns: "10rem 10rem",
                gridTemplateRows: "5rem 5rem"
                }}>
                {
                 paises.map((pais, key) => (
                    <Button 
                        key={key}
                        variant="contained"
                        onClick={(e) => {
                            compruebaRespuesta(pais)
                            }}>
                        {pais.name}
                    </Button>
            ))}
            </div>
            </div>
            }
        </div>
    );
}

export default Botones;

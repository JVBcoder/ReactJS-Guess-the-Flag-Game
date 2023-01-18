import React from 'react';
import { useContexto } from './contexto';
import { Button } from '@mui/material';
import FinalPartida from './finalPartida';
import { Redirect } from 'react-router-dom';

const MuestraMarcador = () => {

    const { marcador, setMarcador } = useContexto()  
  


    return (
        <div style={{paddingTop: "1rem", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
            <div style={{display: "grid", gridTemplateColumns: "20rem"}}>
                <Button variant='outlined'>PUNTUACIÓN</Button>
            </div>
            <div style={{display: "grid", gridTemplateColumns: "10rem 10rem", gridTemplateRows: "3rem"}}>
                <Button variant='contained' color='success'>ACIERTOS: {marcador.aciertos} </Button>
                <Button variant='contained' color='error'>FALLOS: {marcador.fallos}</Button>
            </div>
            Total de rondas jugadas: {marcador.total}
            
        </div>
    );
}

export default MuestraMarcador;

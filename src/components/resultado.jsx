import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Typography,  } from '@mui/material';
import { useContexto } from './contexto';

const Resultado = () => {

    const { bandera, respuesta } = useContexto()

     const acierto = (

        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">¡Acertaste! </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span style={{fontWeight: "bolder"}}>¡Es {bandera.name}!</span>
                        ¡Buen trabajo! Sheldon Coopper estaría orgulloso de ti.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card> 
    )

    const fallo = (

        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">¡Mal!</Typography>
                    <Typography variant="body2" color="text.secondary">
                        ¡Noooo! La respuesta correcta era <span style={{fontWeight: "bolder"}}>{bandera.name}</span>.
                        Tendrás que probar suerte de nuevo.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card> 
    )

    const timeover = (

        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h2" component="div">¡Tiempo!</Typography>
                    <Typography variant="body2" color="text.secondary">
                        ¡Se te acabó el tiempo! La respuesta correcta era <span style={{fontWeight: "bolder"}}>{bandera.name}</span>.
                        Tendrás que ser más rápido la próxima vez.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card> 
    )

    const muestraResultado = () => {
        if (respuesta === 'paismal') return timeover
        else if (respuesta === bandera.name) return acierto 
        else return fallo 
    }

    return (
        <div style={{width: "21rem", alignSelf: "center"}}>
            { 
                muestraResultado()                
            }
        </div>
    );
}

export default Resultado;

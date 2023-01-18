import { unstable_ClassNameGenerator } from "@mui/material"
import { createContext, useContext, useState } from "react"
import listaPaises from './listaPaises.json'


const Contexto = createContext()
export const useContexto = () => useContext(Contexto)


export default function MiProvider ({children}) {

    const [paises, setPaises] = useState([])
    const [bandera, setBandera] = useState()
    const [marcador, setMarcador] = useState ({total: 0, aciertos: 0, fallos: 0})
    const [respuesta, setRespuesta] = useState ('')
    const [haClickado, setHaClickado] = useState(false)
    const [tiempo, setTiempo] = useState(10)
    const paismal = {name: "paismal"}



    const generaPaises = () => {
        
        setRespuesta()
        let arrayOpciones = []
        for (let i = 0; i<4; i++) {
            const opcion = Math.floor(Math.random() * listaPaises.length)
            arrayOpciones.push(listaPaises[opcion])
        }
        setPaises(arrayOpciones)
        const paisCorrecto = Math.floor(Math.random() * arrayOpciones.length)
        setBandera(arrayOpciones[paisCorrecto])
        setHaClickado(false)   
    }


    const compruebaRespuesta = (pais=paismal) =>  {
        setRespuesta(pais.name)
        if (pais.name === bandera.name) {
            setMarcador({...marcador, total: marcador.total+1, aciertos: marcador.aciertos+1})    
        }
        else {
            setMarcador({...marcador, total: marcador.total+1, fallos: marcador.fallos+1})
        }       
        setHaClickado(true)
        setTimeout(() => {
            generaPaises()
        }, 5000);   
    }


    return (
        <Contexto.Provider 
        value= {{ generaPaises, paises, setPaises, bandera, setBandera, compruebaRespuesta, respuesta, setRespuesta,
                haClickado, setHaClickado, marcador, setMarcador}}>
                { children }
        </Contexto.Provider>
    );

}
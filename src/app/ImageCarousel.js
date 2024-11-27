import { useState } from "react"

export default function ImageCarousel({urls}){
    
    const [index, setIndex] = useState(0);
    //Comprueba el indice y si es el ultimo pasa a 0, si no suma 1 al indice
    function onNextImage(){
        if(index !== urls.length -1){
            setIndex(index + 1);
        } else{
            setIndex(0);
        }
    }
    //Comprueba el indice y si es 0 pasa al ultimo, si no resta 1 al indice
    function onPrevImage(){
        if(index !== 0){
            setIndex(index - 1);
        } else{
            setIndex(urls.length - 1);
        }
    }
    return(
        <div>
            <h1>Galeria</h1>
            <button onClick={onPrevImage}>Anterior</button>
            <button onClick={onNextImage}>Siguiente</button>
            <p>Titulo : {urls[index].title}</p>
            <img src={urls[index].url} style={{ maxWidth: "100%" }} />
        </div>
    );
}
import {useState} from 'react';

const libros = [
    {id:1,descripcion: "libro1"},
    {id:2,descripcion: "libro2"},
    {id:3,descripcion: "libro3"}
]

function Libro({libro, onUpdate}){

const [isEditing, setIsEditing] = useState(false)

let mostrarLibro;

    if(isEditing){
        mostrarLibro = 
        // El onChange lo vinculamos a onUpdate que nos llega por prop,  llamada abajo línea de código 129-130
        // que a su vez llama a la línea de código 109 y modifica el estado de la variable de los libros (definida en el padre)
        // El botón cambia el valor de la variable de estado isEditing a false por tanto re-renderiza el componente mostrando el else de este if
        <>
            <input value={libro.descripcion} onChange={ e => onUpdate(libro.id, e.target.value)} />
            <button onClick={() => setIsEditing(false)}>Actualizar</button>
        </>
    }else{
        mostrarLibro = 
        // El botón Editar cambia el estado de isEditing a true y muestra el jsx de arriba el del if
        <>
            <p>{libro.descripcion}</p>
            <button onClick={() => setIsEditing(true)}>Editar</button>
            
        </>
    }
 


    //muestro la variable que me acabo de crear como return de mi JSX
    return (<div >
        {mostrarLibro}
    </div>);
}


export default function Libra(){

    
    const [librosList, setLibros] = useState(libros);


    const [descripcionNueva, setDescripcionNueva] = useState('');
   
    function handleCreate(e){
        e.preventDefault();
        setLibros([...librosList, {
        id: numId++,
        descripcion: descripcionNueva,
        completada: false
        }])
        setDescripcionNueva('');
    }

  

    function handleUpdate(libroId, textoNuevo) {
        setLibros(librosList.map(libro =>
            {
                if(libro.id === libroId){
                    return {...libro, descripcion: textoNuevo}
                }else{
                    return libro;
                }
            }
        ))
    }



    
    return(
        //Iteración por el array pero ahora llamando al componente libro que me he creado
    <div>
        {librosList.map(libro => 
            <Libro key={libro.id} libro={libro} onUpdate={handleUpdate} /> 
        )}
    </div>);
}

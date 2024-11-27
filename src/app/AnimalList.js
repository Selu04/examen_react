import { useState } from "react";

function Animal({ animals }){
    return(
        <div>
            {animals.map((animal, index) =>
                <div key={index}>
                    <p>Nombre: {animal.name}</p>
                    <p>Especie: {animal.type}</p>
                    <p>Edad: {animal.age}</p>
                    <p>Genero: {animal.gen}</p>
                </div>)}
        </div>
    );
}
export default function AnimalList(){
    //variables de cada campo del formulario junto a la lista de animales
    const [animals, setAnimals] = useState([{id : '1', name: 'leon', type:'mamifero', age: '20', gen : "Macho"}]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [age, setAge] = useState('');
    const [gen, setGen] = useState('');
    // const listAnimals = {animals.map(animal => Animal({animal}))}
    const [idActual, setIdActual] = useState(animals.length+1);
    
    //comprueba que no esten vacias las variables y las añade al ultimo lugar
    function addAnimal(e){
        e.preventDefault();
        if(name.trim() !== ''){
            if(type.trim() !== ''){
                setAnimals([...animals, {id:{idActual}, name : {name}, type : {type}, age : {age}, gen : {gen}}])
                setIdActual(idActual+1)
            } else{
                alert("La especie no puede estar vacia")
            }
        } else{
            alert("El nombre no puede estar vacio");
        }
    }


    return(
        <div>
            <form onSubmit={addAnimal}>
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nombre"></input>
                <input
                    type="text"
                    value={type}
                    onChange={e => setType(e.target.value)}
                    placeholder="Especie"></input>
                <input
                    type="number"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                    placeholder="Edad"></input>
                <select>
                    <option value="Macho" onClick={() => setGen('Macho')}>Macho</option>
                    <option value="Hembra" onClick={() => setGen('Hembra')}>Hembra</option>
                </select>
                <button type="submit" value="crear">Añadir animal</button>
            </form>
            <div>
                <Animal animals={animals}></Animal>
            </div>
        </div>
    );
}

'use client'

import AnimalList from "./AnimalList";
import ImageCarousel from "./ImageCarousel";
import Library from "./Library";

export default function Home() {
  const urls = [
    {title: "titulo 1", url:"https://i.imgur.com/Q8TPuKq.jpeg"},
    {title: "titulo 2", url:"https://i.imgur.com/DoP8q0E.jpeg"},
    {title: "titulo 3", url:"https://i.imgur.com/Q8TPuKq.jpeg"},
    {title: "titulo 4", url:"https://i.imgur.com/DoP8q0E.jpeg"},
]
  return (
    <div>
      <h1>Lista de animales</h1>
      <AnimalList></AnimalList>
      <br></br>
      <h1>Carousel de imagenes</h1>
      <ImageCarousel urls={urls}></ImageCarousel>
      <br></br>
      <h1>Libreria</h1>
      <Library></Library>
    </div>
  );
}

import imageRickMorty from './images/rick-morty.png'
import './App.css';
import { useState } from 'react';
import './components/character';
import { Characters } from './components/character';

function App() {

  const [character, setCharacter]= useState(null);

  const reqApi = async ()=>{
    const api= await fetch('https://rickandmortyapi.com/api/character')
    const charaterapi= await api.json();

    setCharacter(charaterapi.results);

    console.log(charaterapi.results);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {character? (
        <Characters
        character={character}
        setCharacter={setCharacter} />
      ):(
        <>
        <img src={imageRickMorty} alt='Rick and Morty' className='img-home' />
        <button className='btn-search' onClick={reqApi}>Buscar Personajes</button>
     </>
      )}
         </header>
    </div>
  );
}

export default App;

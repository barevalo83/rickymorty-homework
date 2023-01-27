import logo from './logo.svg';
import './App.css';
import imageRickymorty from './img/rick-morty.png';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters]=useState(null);
  const reqApi = async ()=>{
    const api = await fetch('https://rickandmortyapi.com/api/character');
    let charactersApi = await api.json();

    //console.log(charactersApi);
    setCharacters(charactersApi.results);

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title"> Rick and Morty</h1>
        {characters ? (
        <Characters characters={characters}/>
        ):(
          <>
        <img src={imageRickymorty} alt="Rick and Morty" className="img-home"/>
        <button onClick={reqApi} className="btn-search">Buscar personajes</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;

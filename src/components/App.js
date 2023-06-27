//import '../styles/App.scss'
//import data from '../data/data.json'
import { useEffect, useState } from 'react';




  function App() {
    const [quotes, setQuotes] = useState([]);
    const [filterText, setFilterText] = useState('');
    const [filterCharacter, setFilterCharacter] = useState('');
    
    useEffect (() => {
      fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
        .then((response) => response.json())
        .then((data) => setQuotes(data));
  
      }, []);

      const handleInputFilter = (ev) =>{
        setFilterText(ev.target.value);

      }

      const handleFilterCharacter = (event) => {
        setFilterCharacter(event.target.value);
      }; 

    {/*const filteredQuotes = quotes.filter((quote) => {
    const quoteText = quote.quote.toLowerCase();
    const searchText = filterText.toLowerCase();
    const characterName = quote.character.toLowerCase();
    const searchCharacter = filterCharacter.toLowerCase();*/}

    return quoteText.includes(searchText) && characterName.includes(searchCharacter);
  };


      const renderQuotes = () => {
        return (
          
         quotes
         //.filter
         .map((eachQuote, index) => (
        <li key={index}>
          {eachQuote.character}: {eachQuote.quote}
        </li>
        )));
    
      };
        
    return (
      <div className="container">
      <h1>Frases de Friends</h1>

      <div>
        <input
          type="text"
          placeholder="Filtrar por frase"
          value={filterText}
          onChange={handleInputFilter}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Filtrar por personaje"
          value={filterCharacter}
    onChange={handleFilterCharacter}
        />
    </div>

      <ul>{renderQuotes ()}</ul>
    </div>
      );

    }


    



export default App;


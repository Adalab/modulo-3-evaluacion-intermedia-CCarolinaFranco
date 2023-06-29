

import { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');

  useEffect(() => {
    fetch('https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/quotes-friends-tv-v1/quotes.json')
      .then((response) => response.json())
      .then((data) => setQuotes(data));

  }, []);

  const handleInputFilter = (ev) => {
    setFilterText(ev.target.value);

  }

  const handleFilterCharacter = (event) => {
    setFilterCharacter(event.target.value);
  }
  const renderQuotes = () => {
    return (

      quotes
        .filter((cadaQuote) => cadaQuote.quote.includes(filterText.toLowerCase()))
        



        .map((eachQuote, index) => (
          <li key={index}>
            {eachQuote.character}: {eachQuote.quote}
          </li>
        )));

  }


  return (
    <div className="container">
      <header>
        <h1>Frases de Friends</h1>
      </header>

      <form>
        <label>Filtrar por frase</label>
        <input type="text" placeholder="Filtrar por frase" value={filterText}
          onChange={handleInputFilter}
        />

        <label>Personajes</label>
        <select name="" id=""
          value={filterCharacter}
          onChange={handleFilterCharacter}>
          
          <option value= "all">Todos</option>
          <option value= "Phoebe">Phoebe</option>
          <option value= "Rachel">Rachel</option>
          <option value= "Rachel">Ross</option>
          <option value= "Monic">Monica</option>
          <option value= "Chandler">Chandler</option>
          <option value= "Joey">Joey</option>

        </select>

      </form>

      <ul>{renderQuotes()}</ul>
    </div>
  );




}

export default App;


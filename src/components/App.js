import '../styles/App.css';
import { useEffect, useState } from 'react';


function App() {
  const [quotes, setQuotes] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [filterCharacter, setFilterCharacter] = useState('all');
  const [addedquotes, setAddedquotes] = useState({})
  
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

  const handleAddingQuote = (event) =>{
    setAddedquotes({...addedquotes,[event.target.name]:event.target.value});
  }
  const handleClickAddedQuote =(ev) =>{
    ev.preventDefault();
    setQuotes([...quotes,addedquotes]);
  }

  const renderQuotes = () => {
    return (  
      quotes
        .filter((cadaQuote) => cadaQuote.quote.toLowerCase().includes(filterText.toLowerCase()))
        .filter((eachCharacter) => {
          if (filterCharacter === 'all') {
            return true
          }
          else {
            return eachCharacter.character === filterCharacter;
          }
        })
        .map((eachQuote, index) => (
          <li key={index}>
            {eachQuote.character}: {eachQuote.quote}
          </li> 
        )));
  }


  return (
    <div className="container">
      <header>
        <h1 className='h1'>Frases de Friends</h1>
      </header>

      <form>
        <label>Filtrar por frases</label>
        <input type="text" placeholder="Filtrar por frase" value={filterText}
          onChange={handleInputFilter}
        />

        <label>Personajes</label>
        <select name="" id=""
          value={filterCharacter}
          onChange={handleFilterCharacter}>

          <option value="all">Todos</option>
          <option value="Phoebe">Phoebe</option>
          <option value="Rachel">Rachel</option>
          <option value="Rachel">Ross</option>
          <option value="Monic">Monica</option>
          <option value="Chandler">Chandler</option>
          <option value="Joey">Joey</option>

        </select>

      </form>

      <ul>{renderQuotes()}</ul>

      <h2 className='h2'>Frases nuevas</h2>
      <form>
        <label>Frases</label>
        <input type="text" name="quote" onInput={handleAddingQuote} value={addedquotes.quote}/>
        <label>Personaje</label>
        <input type="text" name="character" onInput={handleAddingQuote} value={addedquotes.character}/>
        <button onClick={handleClickAddedQuote}>Anadir nueva frase</button>
      </form>

      <footer>&copy; 2023 Friends Phrases</footer>

    </div>
     
  );
}

export default App;


import "./App.css";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
// import SearchBar from './components/SearchBar'
import Nav from "./components/Nav";
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'-lo usamos en el 1er ejercicio React intro-
import { useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose=(id)=> {
    setCharacters(oldChars => oldChars.filter(char => char.id !== parseInt(id)));
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
    {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      {/* <Nav style={{ border: '1px solid red'}}/> */}
      {/* <div>
        <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => alert('Puto Rick & puto el que lee')}
        />
      </div> */}
<Routes>
      <Route path="/" element={<Form/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
       <Route path='/favs' element={<Favorites/>}/> 
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
      <div style={{ height: "40px", marginBottom: "0px", marginTop: "8%" }}>
        © Copyright Pigmaleon Studio . All rights reserved.
      </div></div>
  );
}

export default App;

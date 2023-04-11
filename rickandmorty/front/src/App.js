import "./App.css";
// import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
// import SearchBar from './components/SearchBar'
import Nav from "./components/Nav";
// import SearchBar from './components/SearchBar.jsx'
// import characters, { Rick } from './data.js'-lo usamos en el 1er ejercicio React intro-
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form";
import Favorites from "./components/Favorites";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const onSearch = (id) => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const username = "lulisdero20@gmail.com";
  const password = "123456";

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    }
  };

  // useEffect(()=>{
  //   !access && navigate("/")
  // }, [access])

  const onClose = (id) => {
    setCharacters((oldChars) =>
      oldChars.filter((char) => char.id !== parseInt(id))
    );
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}
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
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favs" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
      <div
        style={{
          padding: "10%",
          height: "40px",
          marginBottom: "0px",
          marginTop: "8%",
        }}
      >
        © Copyright Pigmaleon Studio . All rights reserved.
      </div>
    </div>
  );
}

export default App;

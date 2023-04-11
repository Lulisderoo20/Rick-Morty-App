/*const KEY = `fce23bfc8abc.284380e261b345938c87`;
// const URL = "https://rickandmortyapi.com/api/character/:id";
const URL = "https://rickandmortyapi.com/api";
const URLBASE = `https://be-a-rym.up.railway.app/api`;
const axios = require("axios");

const success = (response, res) => {
  const { id, image, name, gender, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, image, name, gender, species }));
};

const error=(erra, resa)=>{
    resa.writeHead(500, { "Content-Type": "text/plain" });
    resa.end(erra.message);
  }

const getCharById = (res, ID) => {
  axios
    .get(`${URL}/character/${ID}?key=${KEY}`)
    .then((response) => success(response, res))
    .catch((err) =>error(err, res) );
};

module.exports = getCharById;
*/
const KEY = `fce23bfc8abc.284380e261b345938c87`;
const URL="https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const success = (response, res) => {
  const { id, image, name, gender, species } = response.data;
  res.status(200).json({ id, image, name, gender, species });
};

const error=(erra, resa)=>{
  resa.status(500).json(erra.message);
}

const getChardById = (req, res) => {

  const {id}= req.params;

  axios
    .get(`${URL}/${id}?key=${KEY}`)
    
    .then((response) => success(response, res))
    .catch((err) =>error(err, res) );
};

module.exports = getChardById;

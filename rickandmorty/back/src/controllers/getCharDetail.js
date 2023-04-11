// const KEY = `fce23bfc8abc.284380e261b345938c87`;
// const URL = "https://rickandmortyapi.com/api/character";
// const URL = "https://rickandmortyapi.com/api/character/:id";
// const URLBASE = `https://be-a-rym.up.railway.app/api`;
// const axios = require("axios");

// const success = (response, res) => {
//   const { name, gender, status, origin , species, image } = response.data;
//   res.writeHead(200, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({  name, gender, status, origin , species, image }));
// };

// const error=(erra, resa)=>{
//     resa.writeHead(500, { "Content-Type": "text/plain" });
//     resa.end(erra.message);
//   }

// const getCharDetail = (res, ID) => {
//   axios
//     .get(`${URL}/${ID}?key=${KEY}`)
//     .then((response) => success(response, res))
//     .catch((err) =>error(err, res) );
// };

// module.exports= getCharDetail

const KEY = `fce23bfc8abc.284380e261b345938c87`;
const URL = "https://rickandmortyapi.com/api/character";
// const URL = "https://rickandmortyapi.com/api/character/:id";
const URLBASE = `https://be-a-rym.up.railway.app/api`;
const axios = require("axios");

const success = (response, res) => {
  const { name, gender, status, origin, species, image } = response.data;
  res.status(200).json({ name, gender, status, origin, species, image });
};

const error = (erra, resa) => {
  resa.status(500).json(erra.message);
};

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
  
    .get(`${URL}/${id}?key=${KEY}`)
    .then((response) => success(response, res))
    .catch((err) => error(err, res));
};

module.exports = getCharDetail;

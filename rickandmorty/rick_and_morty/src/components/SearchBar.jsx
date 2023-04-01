import { useState } from 'react';
import characters from '../data';

export default function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  
  // const handleSearch = () => {
  //   const character = characters.find(
  //     (char) => char.id === parseInt(inputValue) 
  //   );
  //   if (character) {
  //     onSearch(character.id);
  //   } else {
  //     alert('Personaje no encontrado');
  //   }
  // };
  const handleSearch = () => {
    onSearch(inputValue);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{marginBottom: '20px'}}>
      <input
      style={{ backgroundColor: 'black', color: 'white' }}
        type='search'
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        onKeyUp={handleKeyDown}
      />
      <button onClick={handleSearch} style={{ backgroundColor: 'black', color: 'white' }}>Buscar</button>
      
      
    </div>
  );
}
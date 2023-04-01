import "animate.css/animate.min.css";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions.js';
import {useState, useEffect} from "react";


 function Card({ name, species, gender, image, onClose, id , addFav, removeFav, myFavs }) {
  // function Card(props) {
  // const{name, species, gender, image, onClose}=props;
  // const dispatch = useDispatch();
  const [isFav, setIsFav]=useState(false)

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ name, species, gender, image, onClose, id, addFav, removeFav });
    }
  };

  useEffect(() => {
    myFavs.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavs]);
  

  return (
    <div className="card">
      {
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
      <button
        className="close-btn"
        onClick={() => onClose(id)}
        style={{
          backgroundColor: "black",
          color: "white",
          boxShadow: "10px",
          borderRadius: "50%",
        }}
      >
        X
      </button>
      
      <Link to={`/detail/${id}`}>
        <h2 className="animate__animated animate__tada">{name}</h2>
      </Link>
      <h2 className="animate__animated animate__tada">{species} </h2>
      <h2 className="animate__animated animate__tada">{gender}</h2>
      <img
        src={image}
        alt={name}
        style={{ borderRadius: "20px" }}
        className="animate__animated animate__tada"
      />
    
    </div>
  );
 
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addFav:(character)=>{dispatch(addFav(character))},
    removeFav:(id)=>{dispatch(removeFav(id))},
  
  }
    }
    const mapStateToProps=(state)=>{
      return {
        myFavs: state.myFavs
      }
    }
export default connect(mapStateToProps, mapDispatchToProps)(Card);






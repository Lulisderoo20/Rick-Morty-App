import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavs);
  return (
    <div>
      {favorites.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        );
      })}
    </div>
  );
}
// const mapStateToProps = (state) => {
//   return {
//     myFavs: state.myFavs,
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

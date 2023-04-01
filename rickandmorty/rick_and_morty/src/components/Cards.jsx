import Card from './Card';


export default function Cards({ characters , onClose}) {
   
   //export default function Cards(props) {
  // const { characters } = props;
   return (<>
      {characters.map(({ name, species, gender, image, id})=>{
         return(
            <Card 
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
            
            
            />)
         })}
   </>
   );
}


import './styles.css';
import { AnimalCardProps } from './types';
/* interface IAnimal {
  name: string;
  species: string;
  role: string;
  skills: string[];
  image: string;
}

interface IAnimalCardProps {
  animalData:IAnimal;
} */

function AnimalCard({ animalData }:AnimalCardProps) {
  return (
    <div className='animal-card-wrapper'>
      <h3>{animalData.name}</h3>
      <div>{animalData.species}</div>
      <img src={animalData.image} />
    </div>
  );
}
export default AnimalCard;

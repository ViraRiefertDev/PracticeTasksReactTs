import { AnimalCardProps } from './types';
import { AnimalCardWrapper, AnimalImage, AnimalName, AnimalSpecies } from './styles';
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
    <AnimalCardWrapper>
      <AnimalName>{animalData.name}</AnimalName>
      <AnimalSpecies>{animalData.species}</AnimalSpecies>
      <AnimalImage src={animalData.image} />
    </AnimalCardWrapper>
  );
}
export default AnimalCard;

//типизирование объекта props

interface IAnimal {
  name: string;
  species: string;
  role: string;
  skills: string[];
  image: string;
}

export interface IAnimalCardProps {
  animalData:IAnimal;
}
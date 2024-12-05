import { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

import Input from '../../components/Input/Input';
import { DogImg, ErrorMessage, Homework09Component, Spinner } from './styles';
function HW09Lesson() {
  const [search, setSearch] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [dogImageUrl, setDogImageUrl] = useState<string | undefined>(undefined);
  const [error, setError] = useState<any>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DOG_URL = 'https://dog.ceo/api/breeds/image/random';

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value);
  };

  const getDogPhoto = async () => {
    setDogImageUrl(undefined);
    setError(undefined);
    try {
      setIsLoading(true);
      const response = await axios.get(DOG_URL);
      // пример работы с отправкой запроса POST 
      // const response = await axios.post(url, {
      //  name:'Bob',
      //  email:'bob@gmail.com'
      //});
      setDogImageUrl(response.data.message);
    } catch (error: any) {
      //console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDogPhoto();
  }, [search]);

  return (
    <Homework09Component>
      <Input
        name='search'
        placeholder='Enter word'
        value={search}
        onChange={onSearchChange}
      />
      <Input
        name='note'
        placeholder='Enter word'
        value={note}
        onChange={onNoteChange}
      />
      {dogImageUrl && <DogImg src={dogImageUrl} alt='random dog' />}
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      {isLoading && <Spinner>Loading...</Spinner>}
    </Homework09Component>
  );
}
export default HW09Lesson;

import { ChangeEvent } from 'react';

export interface MainInputProps {
  placeholder: string;
  inputValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

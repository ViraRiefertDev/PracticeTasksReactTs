export interface CounterProps{
  value:number;
  incrementCounter: ()=>void;
  decrementCounter: ()=>void;
  isDecrementDisabled:boolean;
}
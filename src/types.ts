import {Dispatch, MouseEventHandler, SetStateAction} from 'react';
export type TShopsTable = {
    address: string;
    amount: string;
    date: string;
    delivered: string;
    inTime: string;
    number: string;
    ordered: string;
    serviceLevel: string;
  }[];
  
  export type TItemsTable = {
    address: string;
    item: string;
    delivered: string;
    inTime: string;
    number: string;
    ordered: string;
    serviceLevel: string;
  }[];

  export type TSliderProps = {
    onSlideSelect: Dispatch<SetStateAction<string>>;
  }
  export type TSlideProps = {
    children: React.ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
  }
  
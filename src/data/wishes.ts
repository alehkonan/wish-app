import { Wish } from '../types';

export const wishes: Wish[] = [
  {
    id: 1,
    text: 'Послушать музыку',
    sphere: {
      id: 4,
      name: 'Entertaimant',
      color: '#102893',
    },
  },
  {
    id: 2,
    text: 'Посмотреть фильм',
    sphere: null,
  },
  {
    id: 3,
    text: 'Поцеловать кого-нибудь',
    sphere: {
      id: 2,
      name: 'Relationship',
      color: '#204345',
    },
  },
  {
    id: 4,
    text: 'Съесть халву',
    sphere: {
      id: 1,
      name: 'Food',
      color: '#525200',
    },
  },
  {
    id: 5,
    text: 'Покататься на велосипеде',
    sphere: {
      id: 3,
      name: 'Sport',
      color: '#521393',
    },
  },
];

import {Reviews} from '../types/reviews';

export const reviews: Reviews = [
  {
    id: 1,
    comment: 'A really nice hotel, staff only willing to help.the rooms are clean and tidy it’s a stones throw from the main train station which is a bonus I’d recommend this. Hotel and we will becoming Bach to stay again',
    date: 'Sun Mar 13 2022 16:24:45 GMT+0300 (Москва, стандартное время)',
    rating: 4.5,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: false,
      name: 'Glory',
    },
  },
  {
    id: 2.3,
    comment: 'Nice hotel with friendly staff. Breakfast good but could be better. Happy Hour a nice touch.',
    date: 'Wen June 23 2021 20:44:34 GMT+0300 (Москва, стандартное время)',
    rating: 1,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Julia',
    },
  },
  {
    id: 3,
    comment: 'I stayed as a single person for an overnight visit. It was the perfect size and space for what I needed. Very clean and comfortable. I originally booked a single, but was upgraded to a double. I think it would have definitely on the small side if I were sharing that space it another person, though. ',
    date: 'Fri Sem 03 2021 09:14:23 GMT+0300 (Москва, стандартное время)',
    rating: 3.2,
    user: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Mike Mankin',
    },
  },
  {
    id: 4,
    comment: 'What a great hotel! Clean, friendly en near the biggest Rome station. We are a family with 2 adults and 2 children. ',
    date: 'Tue Aug 15 2021 13:35:00 GMT+0300 (Москва, стандартное время)',
    rating: 5.6,
    user: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: false,
      name: 'John Reid',
    },
  },
];

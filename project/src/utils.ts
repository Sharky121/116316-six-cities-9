import {City} from './types/city';
import {cities} from './mocks/city';

export const getCity = (id: number) => cities.find((city: City) => city.id === id) ?? cities[0];

import {City} from './types/city';
import {cities} from './mocks/city';

export const getCity = (id: number) => cities.find((city: City) => city.id === id) ?? cities[0];

export const isContainSymbol = (value: string, regex: RegExp): boolean => regex.test(value);

export const isMore = (value: number, minLength: number): boolean => value >= minLength;

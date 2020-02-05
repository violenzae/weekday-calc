import {Date} from  './../src/weekday-calc';
import { exportAllDeclaration } from '@babel/types';

describe('Date', () => {

  test('should create an object with values equaling to input', () => {
  let date = new Date(23,4,1968);
  expect(date.day).toEqual(23);
  expect(date.month).toEqual(4);
  expect(date.year).toEqual(1968);
  
  });
});

  describe('minusYear', () => {

  test('if the month is january or febuary then it shoud return the year minus one', () => {
  let janOrFeb = new Date(13,2,1990);
  janOrFeb.minusYear();
  expect(janOrFeb.year).toEqual(1989);


  
  });
});
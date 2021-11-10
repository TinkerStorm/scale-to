import test from 'ava';

import { scaleTo } from '..';
import { roundBy10ToPower as roundBy10 } from './helpers/tolorance';

for (let i = 1; i <= 10; i++) {
  for (let p = 4; p <= 13; p++) {
    test(`(iteration:${i},precision:${p}) scales numbers to total of '1' with precision ${p}`, t => {
      const obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = scaleTo(1, obj);

      const sum = Object.values(result).reduce((a, b) => a + b, 0);
      const roundedSum = roundBy10(sum, p);

      t.is(roundedSum, 1);
      t.log(`${sum} -> ${roundedSum}`);
    })

    const target = Math.ceil(Math.random() * 100);
    test(`(iteration:${i},precision:${p},target:${target}) scales numbers to total of '1' with precision ${p}`, t => {
      const obj = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const result = scaleTo(target, obj);

      const sum = Object.values(result).reduce((a, b) => a + b, 0);
      const roundedSum = roundBy10(sum, p);

      t.is(roundedSum, target);
      t.log(`${sum} -> ${roundedSum} @ ${target}`);
    })
  }
}
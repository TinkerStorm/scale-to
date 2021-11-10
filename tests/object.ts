import test from 'ava';

import { scaleObjectTo } from '..';
import { roundBy10ToPower as roundBy10 } from './helpers/tolorance';

for (let i = 1; i <= 10; i++) {
  for (let p = 4; p <= 13; p++) {
    test(`(iteration:${i},precision:${p}) scales numbers to total of '1' with precision ${p}`, t => {
      const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
      const result = scaleObjectTo(1, obj);

      const sum = Object.values(result).reduce((a, b) => a + b, 0);
      const roundedSum = roundBy10(sum, p);

      t.is(roundedSum, 1);
      t.log(`${sum} -> ${roundedSum}`);
    })

    const target = Math.ceil(Math.random() * 100);
    test(`(iteration:${i},precision:${p},target:${target}) scales numbers to total of '${target}' with precision ${p}`, t => {
      const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
      const result = scaleObjectTo(target, obj);

      const sum = Object.values(result).reduce((a, b) => a + b, 0);
      const roundedSum = roundBy10(sum, p);

      t.is(roundedSum, target);
      t.log(`${sum} -> ${roundedSum} @ ${target}`);
    })
  }
}
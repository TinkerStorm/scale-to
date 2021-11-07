import test from 'ava';
import { scaleObjectTo } from '..';

test('scales numbers to total of one', t => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const result = scaleObjectTo(1, obj);
  const sum = Object.values(result).reduce((a, b) => a + b, 0);

  t.is(sum, 1);
});

const target = Math.ceil(Math.random() * 100);
test(`scales numbers to total of ${target}`, t => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
  const result = scaleObjectTo(target, obj);
  const sum = Object.values(result).reduce((a, b) => a + b, 0);

  t.is(sum, target);
});
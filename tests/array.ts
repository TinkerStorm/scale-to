import test from 'ava';
import { scaleTo } from '..';

test('scales numbers to total of one', t => {
  const arr = [1, 2, 3, 4, 5];
  const result = scaleTo(1, arr);
  const sum = result.reduce((a, b) => a + b, 0);

  t.is(sum, 1);
});

const target = Math.ceil(Math.random() * 100);
test(`scales numbers to total of ${target}`, t => {
  const arr = [1, 2, 3, 4, 5];
  const result = scaleTo(target, arr);
  const sum = result.reduce((a, b) => a + b, 0);

  t.is(sum, target);
});
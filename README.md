# scale-to
A functional utility to rescale numbers in a list to part of the given total.

## API

### `scaleTo`

- `total: number` - The total to scale to.
- `list: number[]` - The list of numbers to scale to `total`.

```ts
import { scaleTo } from 'scale-to';

const numbers = [1, 2, 3, 4];

scaleTo(1, numbers);
// [0.1, 0.2, 0.3, 0.4]
```

### `scaleObjectTo`

- `total: number` - The total to scale to.
- `object: { [key: string]: number }` - The object of numbers to scale to `total`.

Returns the object with the scaled values.

```ts
import { scaleObjectTo } from 'scale-to';

const numberMap = { a: 1, b: 2, c: 3, b: 4 }

scaleObjectTo(1, numberMap);
// { a: 0.1, b: 0.2, c: 0.3, d: 0.4 }
```

## Notes

- JavaScript has some inaccuracies with floating point numbers, which can cause unexpected results 
  > As an example, the list from the `scaleTo` example can result in `0.1, 0.2, 0.30000000000000004, 0.4`.
- `total` is placed before `list` to ensure 'grammatical correctness'. You can, in theory, setup a prototype overload on core classes to work around this - but that is purely on your own accord.
  > ```js
  > Array.prototype.scaleTo = function(total) {
  >   return scaleTo(total, this);
  > }
  > ```
- There was a possibility to implement an `extract` parameter or option to extract the list of numbers from an object, but I decided against it to remain consistant with the rest of the package. Use of predicates works when the target is of a specific type that is handled throughout a package, not so much when multiple types are accepted.
  > ```js
  > // theortically speaking, this is what would be done
  > // but i wouldn't know how to set a property on an object... fetched from a predicate
  > const entities = [
  >   { ratio: 1 },
  >   { ratio: 2 },
  >   { ratio: 3 },
  >   { ratio: 4 }
  > ];
  > // scaleObjectTo(total, list, predicate): each(list.*.ratio) / total
  > scaleObjectTo(1, entities, entity => entity.ratio);
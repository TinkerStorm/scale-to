export function scaleTo(total: number, list: number[]): number[] {
  list = list.slice(); // ensure a clone is made to prevent mutation
  const sum = list.reduce((a, b) => a + b, 0);
  const ratio = total / sum;

  return list.map(x => x * ratio);
}

export function scaleObjectTo(total: number, object: { [key: string]: number }): { [key: string]: number } {
  object = { ...object }; // ensure a clone is made to prevent mutation
  const sum = Object.values(object).reduce((a, b) => a + b, 0);
  const ratio = total / sum;

  return Object.keys(object).reduce((acc, key) => {
    acc[key] = object[key] * ratio;
    return acc;
  }, {} as { [key: string]: number });
}
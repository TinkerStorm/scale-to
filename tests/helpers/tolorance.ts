export const roundBy = (value: number, factor: number): number => Math.round(value * factor) / factor;

// round by 10 to the power of {factor} (e.g. 0.1, 0.01, 0.001)
export const roundBy10ToPower = (value: number, factor: number = precision) => roundBy(value, 10 ** factor);

export const precision = 13;
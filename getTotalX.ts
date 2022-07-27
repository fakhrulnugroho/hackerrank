/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a: number[], b: number[]): number {
  let tmp: number[] = [];
  for (let i = 1; i <= b[0]; i++) tmp.push(i);
  for (let c of a) tmp = tmp.filter((t) => t % c === 0);
  for (let d of b) tmp = tmp.filter((t) => d % t === 0);
  return tmp.length;
}
console.log(getTotalX([2, 4], [16, 32, 96]));

// https://www.hackerrank.com/challenges/between-two-sets/problem

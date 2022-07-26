/*
 * Complete the 'countApplesAndOranges' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER s
 *  2. INTEGER t
 *  3. INTEGER a
 *  4. INTEGER b
 *  5. INTEGER_ARRAY apples
 *  6. INTEGER_ARRAY oranges
 */
function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {
  let appleInRegion = 0;
  let orangeInRegion = 0;
  for (let apple of apples) if (apple + a >= s && apple + a <= t) appleInRegion += 1;
  for (let orange of oranges) if (orange + b >= s && orange + b <= t) orangeInRegion += 1;
  console.log(appleInRegion);
  console.log(orangeInRegion);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);

// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=false

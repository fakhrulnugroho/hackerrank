/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
  let highestScores: number[] = JSON.parse(JSON.stringify(scores));
  let lowestScores: number[] = JSON.parse(JSON.stringify(scores));
  let highestScore = 0;
  let lowestScore = 0;
  for (let i = 0; i < scores.length; i++) {
    if (highestScores[i] > highestScores[i + 1]) highestScores[i + 1] = highestScores[i];
    if (lowestScores[i] < lowestScores[i + 1]) lowestScores[i + 1] = lowestScores[i];
    highestScore += highestScores[i] < highestScores[i + 1] ? 1 : 0;
    lowestScore += lowestScores[i] > lowestScores[i + 1] ? 1 : 0;
  }
  return [highestScore, lowestScore];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

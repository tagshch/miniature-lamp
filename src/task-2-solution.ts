import {Permutation} from 'js-combinatorics';

function generateNumberCombinations(n: number): {
  content: string;
  linesCount: number;
} {
  const elements = Array.from({length: n * 2}, (_, i) => {
    return i < n ? 0 : (i + 1 - n);
  }).join('');

  const it = new Permutation(elements);
  const lines = it.toArray().map(v => v.join(''));

  return {
    content: lines.join('\n'),
    linesCount: lines.length,
  };
}

const result = generateNumberCombinations(5);

console.log(result.linesCount); // 3628800

function getRatingByNumber(n: number): number {
  if(8 === n){
    return 2;
  }

  if([4, 6, 9, 0].includes(n)){
    return 1;
  }

  return 0;
}

function getNumberRating(n: number): number {
  return String(n).split('').reduce((acc, v) => {
    return acc + getRatingByNumber(Number(v));
  }, 0);
}

function sortArrayWithHoleMagic(numbers: number[]): number[] {
  return numbers.sort((a, b) => {
    return getNumberRating(a) - getNumberRating(b);
  });
}

const testArray = [
  88,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,111
];

console.log(sortArrayWithHoleMagic(testArray));

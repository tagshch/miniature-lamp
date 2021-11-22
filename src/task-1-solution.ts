interface Student {
  name: string;
  avgMark: number;
}

interface Statistics {
  avgMark: number;
  highestMark: string;
  lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics {
  const sortedMarks = marks.sort((a, b) => b.avgMark - a.avgMark);
  const highestMark = sortedMarks[0].name;
  const lowestMark = sortedMarks[sortedMarks.length - 1].name;

  const avgMark = marks.reduce((acc, mark) => acc + mark.avgMark, 0) / marks.length;

  return {
    highestMark,
    lowestMark,
    avgMark,
  };
}

const testMarks = [{
  name: 'Vasya',
  avgMark: 3.75,
}, {
  name: 'Lena',
  avgMark: 4.89,
}];

console.log(getStatistics(testMarks));

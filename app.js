const fs = require('fs');

function readNumbersFromFile(filePath) {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const numbers = fileContent.trim().split('\n').map(Number);
    return numbers;
}

function findMax(numbers) {
    let max = -Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
function findMin(numbers) {
    let min = Infinity;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}


function findMedian(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const len = sorted.length;
    if (len % 2 === 0) {
        const mid = len / 2;
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        const mid = Math.floor(len / 2);
        return sorted[mid];
    }
}

function findMean(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

function findLongestIncreasingSequence(numbers) {
    let maxSequence = [];
    let currentSequence = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i === 0 || numbers[i] > numbers[i - 1]) {
            currentSequence.push(numbers[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = [numbers[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

function findLongestDecreasingSequence(numbers) {
    let maxSequence = [];
    let currentSequence = [];

    for (let i = 0; i < numbers.length; i++) {
        if (i === 0 || numbers[i] < numbers[i - 1]) {
            currentSequence.push(numbers[i]);
        } else {
            if (currentSequence.length > maxSequence.length) {
                maxSequence = currentSequence;
            }
            currentSequence = [numbers[i]];
        }
    }

    if (currentSequence.length > maxSequence.length) {
        maxSequence = currentSequence;
    }

    return maxSequence;
}

function processData(filePath) {
    const numbers = readNumbersFromFile(filePath);
    const max = findMax(numbers);
    const min = findMin(numbers);
    const median = findMedian(numbers);
    const mean = findMean(numbers);
    const longestIncreasingSequence = findLongestIncreasingSequence(numbers);
    const longestDecreasingSequence = findLongestDecreasingSequence(numbers);

    return {
        max,
        min,
        median,
        mean,
        longestIncreasingSequence,
        longestDecreasingSequence
    };
}

//Relative path to a file 
const filePath = '10m.txt'; 

const result = processData(filePath);
console.log(result);



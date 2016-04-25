

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];





var final = integers
        .sort(function(first, second) { return first - second})
        .filter(function(value) { return value < 20 })
        .map(function(value) { return (value * 1.5) -1 })
        .reduce(function (previousValue, currentValue) { return previousValue + currentValue });

console.log(final);

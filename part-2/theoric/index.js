const average = (...args) => args.reduce((previous, current) => previous+current)/args.length;
console.log(average(10, 0, 5));
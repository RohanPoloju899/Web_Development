let x=54;
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toPrecision(4));
console.log(Number.isInteger(x));
console.log(new Intl.NumberFormat("hi-IN",{numberingSystem:"deva"}).format(x));

// boki trójkąta
a = 4;
b = 5;
c = 7


let pole = (a, b, c) => {
    p = (a + b + c)/2;
    pol = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return `Pole trókąta o bokach ${a}, ${b} oraz ${c} wynosi ${pol} .`
};

console.log( pole(a, b, c) );
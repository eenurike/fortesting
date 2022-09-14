const obj = {
  a: '123',
  b: 'abc'
};

console.log(obj['a']);
console.log(obj.b);

obj.c = true;
obj.d = {};

console.log(obj.c);
console.log(obj['d']);

const e = 'myNameis';
obj[e] = 'Nurike';

console.log(obj);
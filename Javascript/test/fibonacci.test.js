const CalcularSerieFibonacci = require('../index');

let serieFibonacci = CalcularSerieFibonacci();

// 1. La serie de fibonacci solo puede tener números naturales
test('Solo debe tener números naturales', () => {
    const result = serieFibonacci.find((numero) => numero % 1 !== 0) ? false : true;

    expect(result).toEqual(true);
})

// 2. La sere de fibonacci empieza con los valores 0 y 1
test('Debe empezar con los valores 0 y 1', () => {
    const result = serieFibonacci.slice(0, 2);
    expect(result).toEqual([0, 1]);
})
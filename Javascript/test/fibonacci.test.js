const CalcularSerieFibonacci = require('../index');

// La serie de fibonacci solo puede tener números naturales
test('Solo debe tener números naturales', () => {
    let serieFibonacci = CalcularSerieFibonacci();

    const result = serieFibonacci.find((numero) => numero % 1 !== 0) ? false : true;

    expect(result).toEqual(true);
})


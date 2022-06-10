const CalcularSerieFibonacci = require('../index');

let serieFibonacci = CalcularSerieFibonacci();

// 1. La serie de fibonacci solo puede tener números naturales
test('Solo debe tener números naturales', () => {
    const result = serieFibonacci.find((numero) => numero % 1 !== 0) ? false : true;

    expect(result).toEqual(true);
})

// 2. La serie de fibonacci empieza con los valores 0 y 1
test('Debe empezar con los valores 0 y 1', () => {
    const result = serieFibonacci.slice(0, 2);
    expect(result).toEqual([0, 1]);
})

// 3. En la serie de fibonacci, desde la posición 3, cada termino es la suma de los dos anteriores
test('Cada termino desde la pocision 3 es suma de los dos anteriores', () => { 
    for(let i = 3; i < serieFibonacci.length; i++) {
        const result = serieFibonacci[i] === serieFibonacci[i - 1] + serieFibonacci[i - 2];
        expect(result).toEqual(true);
    }
})
// quant.js · QUANT · iki1uc

export function quant(x) {
    return {
        quant: x * 9,
        phi: 1.618,
        res: (x * 9) / 1.618,
        mode: 'QUANT'
    };
}

export function quantValue(x) {
    return x * 9;
}

export function quantRespo(x) {
    return (x * 9) / 1.618;
}

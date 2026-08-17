// syn.js · SYN · iki1uc

export function syn(x) {
    return {
        syn: x * 3,
        mode: 'SYN',
        phi: 1.618,
        res: (x * 3) / 1.618
    };
}

export function synValue(x) {
    return x * 3;
}

export function synRespo(x) {
    return (x * 3) / 1.618;
}

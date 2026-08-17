// respo.js · RESPO · iki1uc

import { synValue } from './syn.js';
import { quantValue } from './quant.js';

const PHI = 1.61803398875;

export function respo(syn, quant) {
    return {
        syn: syn,
        quant: quant,
        respo: (syn + quant) / PHI,
        phi: PHI,
        mode: 'RESPO'
    };
}

export function computeRespo(synVal, quantVal) {
    return Math.min(1, Math.max(0, (synVal + quantVal) / PHI));
}

export function respoFromInput(x) {
    const s = synValue(x);
    const q = quantValue(x);
    return {
        input: x,
        syn: s,
        quant: q,
        respo: (s + q) / PHI,
        phi: PHI
    };
}

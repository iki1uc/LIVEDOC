// core.js · CONTINIUM · iki1uc

import { computeRespo } from './respo.js';

const PHI = 1.61803398875;
const PHI_INV = 1 / PHI;

export function continuum(syn, quant) {
    return {
        syn: syn,
        quant: quant,
        respo: computeRespo(syn, quant),
        phi: PHI,
        target: PHI_INV,
        sync: Math.abs(syn - quant) < 0.1
    };
}

export function updateContinuum(syn, quant, stiffness = 1.0, damping = 0.4, bias = 0.0) {
    const target = PHI_INV;
    const synAcc = (target - syn) * stiffness - damping * syn + bias;
    const quantAcc = (target - quant) * stiffness - damping * quant - bias;
    
    let newSyn = syn + synAcc * 0.01;
    let newQuant = quant + quantAcc * 0.01;
    
    newSyn = Math.min(1, Math.max(0.05, newSyn));
    newQuant = Math.min(1, Math.max(0.05, newQuant));
    
    return {
        syn: newSyn,
        quant: newQuant,
        respo: computeRespo(newSyn, newQuant),
        sync: Math.abs(newSyn - newQuant) < 0.1
    };
}

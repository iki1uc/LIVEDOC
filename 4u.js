// 4u.js · Response Layer 7 · iki1uc

export const RESPONSES = {
    OK:    { sym: '✅', label: 'OK',    desc: 'Zustimmung',   color: '#4f4', class: 'ok' },
    NOK:   { sym: '❌', label: 'NOK',   desc: 'Ablehnung',    color: '#f44', class: 'nok' },
    FLOW:  { sym: '🌊', label: 'FLOW',  desc: 'System fließt', color: '#4ff', class: 'flow' },
    BREAK: { sym: '💥', label: 'BREAK', desc: 'System bricht', color: '#f4f', class: 'break' },
    ECHO:  { sym: '🔄', label: 'ECHO',  desc: 'Spiegelung',   color: '#ff4', class: 'echo' },
    VOID:  { sym: '◌',  label: 'VOID',  desc: 'Neutral',      color: '#666', class: 'void' },
    ROOT:  { sym: '🌳', label: 'ROOT',  desc: 'Rückkehr',     color: '#ffd700', class: 'root' }
};

export const RESPONSE_KEYS = ['OK', 'NOK', 'FLOW', 'BREAK', 'ECHO', 'VOID', 'ROOT'];

export function getResponse(key) {
    return RESPONSES[key] || RESPONSES.OK;
}

export function getResponseKeys() {
    return RESPONSE_KEYS;
}

export function computeRespo(syn, quant) {
    const PHI = 1.61803398875;
    return Math.min(1, (syn + quant) / PHI);
}

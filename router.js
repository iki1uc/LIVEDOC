// router.js · NC-Router · iki1uc

import { RESPONSES } from './4u.js';

export const NC_ROUTES = {
    OK:    './sys/ok.html',
    NOK:   './sys/nok.html',
    FLOW:  './sys/flow.html',
    BREAK: './sys/break.html',
    ECHO:  './sys/echo.html',
    VOID:  './sys/void.html',
    ROOT:  './sys/root.html'
};

export function routeResponse(key) {
    return NC_ROUTES[key] || './sys/index.html';
}

export function getRoute(key) {
    const resp = RESPONSES[key];
    if (!resp) return null;
    return {
        response: resp,
        route: NC_ROUTES[key] || './sys/index.html'
    };
}

export function router(syn, quant) {
    const PHI = 1.61803398875;
    const R = (syn + quant) / PHI;
    if (R > 0.66) return 'OK';
    if (R < 0.33) return 'NOK';
    return 'FLOW';
}

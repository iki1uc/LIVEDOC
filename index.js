// index.js · Haupt-Entry · iki1uc

import { RESPONSES, getResponse, computeRespo } from './4u.js';
import { syn, synValue } from './syn.js';
import { quant, quantValue } from './quant.js';
import { respo, respoFromInput } from './respo.js';
import { router, getRoute, routeResponse } from './router.js';
import { DIRECTIONS, getDirection } from './stage.js';
import { continuum, updateContinuum } from './core.js';

export default {
    version: '1.0.0',
    name: 'LIVEDOC · iki1uc',
    responses: RESPONSES,
    syn: syn,
    quant: quant,
    respo: respo,
    router: router,
    stage: { directions: DIRECTIONS },
    continuum: continuum,
    utils: {
        computeRespo,
        synValue,
        quantValue,
        respoFromInput,
        getResponse,
        getRoute,
        getDirection,
        updateContinuum
    }
};

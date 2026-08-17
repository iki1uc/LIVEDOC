// stage.js · STAGE · La Toile · iki1uc

export const DIRECTIONS = [
    { id: 'S',  sym: '☀️', label: 'Soleil', desc: 'Sonne' },
    { id: 'H',  sym: '⚙️', label: 'Horizon', desc: 'Engine' },
    { id: 'B',  sym: '▣', label: 'Base', desc: 'Matrix' },
    { id: 'T',  sym: '△', label: 'Triangle', desc: 'Forme' },
    { id: 'O',  sym: '◎', label: 'Orbit', desc: 'Cercle' },
    { id: 'D',  sym: '🛸', label: 'DS9', desc: 'Station' },
    { id: 't',  sym: '🌀', label: 'Tourbillon', desc: 'Helper' },
    { id: 'sys',sym: '◈', label: 'Système', desc: 'Centre' }
];

export function getDirection(id) {
    return DIRECTIONS.find(d => d.id === id) || DIRECTIONS[0];
}

export function getAllDirections() {
    return DIRECTIONS;
}

export function getDirectionByIndex(index) {
    return DIRECTIONS[index % DIRECTIONS.length];
}

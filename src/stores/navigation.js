import { writable } from 'svelte/store'

const states = {
    LAYERS: 'layers',
    IMPORT: 'import',
    EXPORT: 'export',
}

function navigationStore() {
    const navigation = writable(states.IMPORT)

    const goToLayers = () => navigation.set(states.LAYERS)
    const goToImport = () => navigation.set(states.IMPORT)
    const goToExport = () => navigation.set(states.EXPORT)

    return {
        ...navigation,
        goToExport,
        goToImport,
        goToLayers,
    }
}

export const navigation = navigationStore()
export const navigationStates = states

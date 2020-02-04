import { derived, writable } from 'svelte/store'

const min = .125
const max = 10
const zoomValues = [min, .25, .5, .75, 1, 1.25, 1.5, 2, 3, 5, max]

function zoomStore() {
    const zoomIndex = writable(9)
    const zoom = derived(zoomIndex, index => zoomValues[index])

    const zoomIn = () => {
        zoomIndex.update(index => Math.min(index + 1, zoomValues.length - 1))
    }

    const zoomOut = () => {
        zoomIndex.update(index => Math.max(index - 1, 0))
    }

    return {
        ...zoom,
        zoomIn,
        zoomOut,
    }
}

export const zoom = zoomStore()
export const minZoom = min
export const maxZoom = max

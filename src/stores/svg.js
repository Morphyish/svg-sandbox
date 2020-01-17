import { get, writable } from 'svelte/store'
import { parse } from 'svg-parser'
import { stringify } from '../utils'

function svgStore() {
    const svg = writable({children: []})

    const load = html => {
        const parsed = parse(html)
        if (parsed) {
            console.log(parsed)
            svg.set(parsed)
        }
    }

    const exportAsString = () => {
        const snapshot = get(svg)

        return stringify(snapshot)
    }

    const exportAsUrl = () => {
        let source = exportAsString()
        source = `<?xml version="1.0" encoding="utf-8"?>\r\n${source}`

        return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`
    }

    return {
        ...svg,
        load,
        exportAsString,
        exportAsUrl,
    }
}

export const svg = svgStore()

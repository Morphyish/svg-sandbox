import { get, writable } from 'svelte/store'
import { parse, stringify } from '../utils'

function svgStore() {
    const svg = writable({id: -1, children: []})
    const elements = writable({})

    const importSvg = html => {
        const data = parse(html)
        svg.set(data.node)
        elements.set(data.elements)
    }

    const exportSvg = () => {
        const $svg = get(svg)
        const $elements = get(elements)

        let svgAsUrl = '#'
        const svgAsString = stringify($svg, $elements)

        if (svgAsString) {
            const affixedSvgAsString = `<?xml version="1.0" encoding="utf-8"?>\r\n${svgAsString}`

            svgAsUrl = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(affixedSvgAsString)}`
        }

        return {
            svgAsString,
            svgAsUrl,
        }
    }

    return {
        ...svg,
        elements,
        import: importSvg,
        export: exportSvg,
    }
}

export const svg = svgStore()
export const elements = svg.elements

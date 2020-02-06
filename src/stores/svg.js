import { get, writable } from 'svelte/store'
import { parse } from 'svg-parser'
import { stringify } from '../utils'

function findSvgRoot(element) {
    if (element.type === 'element' && element.tagName === 'svg') {
        return element
    }

    if (element.children && element.children.length) {
        for (const child of element.children) {
            let result = findSvgRoot(child)
            if (result) {
                return result
            }
        }
    }
}

function svgStore() {
    const svg = writable({ children: [] })

    const load = html => {
        const parsed = parse(html)
        if (parsed) {
            const svgRoot = findSvgRoot(parsed)
            svg.set(svgRoot)
        }
    }

    const exportAsString = () => {
        const snapshot = get(svg)

        return stringify(snapshot)
    }

    const exportAsUrl = () => {
        let source = exportAsString()
        if (source) {
            source = `<?xml version="1.0" encoding="utf-8"?>\r\n${source}`

            return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(source)}`
        } else {
            return '#'
        }
    }

    return {
        ...svg,
        load,
        exportAsString,
        exportAsUrl,
    }
}

export const svg = svgStore()

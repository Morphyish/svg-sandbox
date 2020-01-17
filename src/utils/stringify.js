export function stringify(element) {
    let string = ''

    if (element.type === 'element') {
        let children = ''
        for (const child of element.children) {
            children += stringify(child)
        }
        string += stringifyElement(element, children)
    } else if (element.type === 'text') {
        string = element.value
    } else {
        for (const child of element.children) {
            string += stringify(child)
        }
    }

    return string
}

function stringifyElement(element, children) {
    let string = ''

    const properties = stringifyProperties(element.properties)

    if (element.tagName === 'svg') {
        return `<svg ${properties}>${children}</svg>`
    } else if (element.tagName === 'title') {
        return `<title ${properties}>${children}</title>`
    } else if (element.tagName === 'desc') {
        return `<desc ${properties}>${children}</desc>`
    } else if (element.tagName === 'defs') {
        return `<defs ${properties}>${children}</defs>`
    } else if (element.tagName === 'g') {
        return `<g ${properties}>${children}</g>`
    } else if (element.tagName === 'circle') {
        return `<circle ${properties} />`
    } else if (element.tagName === 'ellipse') {
        return `<ellipse ${properties} />`
    } else if (element.tagName === 'line') {
        return `<line ${properties} />`
    } else if (element.tagName === 'path') {
        return `<path ${properties} />`
    } else if (element.tagName === 'polygon') {
        return `<polygon ${properties} />`
    } else if (element.tagName === 'polyline') {
        return `<polyline ${properties} />`
    } else if (element.tagName === 'rect') {
        return `<rect ${properties} />`
    }

    return string
}

function stringifyProperties(properties) {
    let string = ''

    for(let prop in properties) {
        if (properties.hasOwnProperty(prop)) {
            string += `${prop}="${properties[prop]}" `
        }
    }

    return string.trim()
}

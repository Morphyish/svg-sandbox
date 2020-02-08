export function stringify(node, elements) {
    const element = elements[node.id]
    let string = ''

    if (element.type === 'element') {
        let content = ''
        for (const child of node.children) {
            content += stringify(child, elements)
        }
        string += stringifyElement(element, content)
    } else if (element.type === 'text') {
        string = element.value
    } else {
        for (const child of node.children) {
            string += stringify(child, elements)
        }
    }

    return string
}

function stringifyElement(element, content) {
    let string = ''

    const properties = stringifyProperties(element.properties)

    if (element.tagName === 'svg') {
        return `<svg ${properties}>${content}</svg>`
    } else if (element.tagName === 'title') {
        return `<title ${properties}>${content}</title>`
    } else if (element.tagName === 'desc') {
        return `<desc ${properties}>${content}</desc>`
    } else if (element.tagName === 'defs') {
        return `<defs ${properties}>${content}</defs>`
    } else if (element.tagName === 'g') {
        return `<g ${properties}>${content}</g>`
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

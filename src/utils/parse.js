import { parse as svgParser } from 'svg-parser'

let ID

export function parse(html) {
    ID = -1
    const parsed = svgParser(html)
    if (parsed) {
        const root = findSvgRoot(parsed)
        return flatten(root, ID)
    }
}

function findSvgRoot(element) {
    if (element.type === 'element' && element.tagName === 'svg') {
        return element
    }

    if (element.children && element.children.length) {
        for (const child of element.children) {
            let root = findSvgRoot(child)
            if (root) {
                return root
            }
        }
    }
}

function flatten(element, parentId) {
    const id = ++ID

    const node = {
        id,
        children: [],
    }
    let elements = {
        [id]: {
            ...element,
            id,
            parentId,
        },
    }

    if (element.children) {
        for (const child of element.children) {
            const { node: childNode, elements: childElements } = flatten(child, id)
            node.children = [
                ...node.children,
                childNode,
            ]
            elements = {
                ...elements,
                ...childElements,
            }
        }
    }

    return {
        node,
        elements,
    }
}

import { writable } from 'svelte/store'

function elementsStore() {
    const elements = writable([
        {
            id: 'element_0',
            name: 'My first circle',
            tag: 'circle',
            cx: 50,
            cy: 50,
            r: 45,
        },
        {
            id: 'element_1',
            name: 'A red circle',
            tag: 'circle',
            cx: 95,
            cy: 95,
            r: 45,
            stroke: 'red',
        },
    ])
    let nextId = 2

    const add = element => {
        elements.update(elementsSnapshot => (
            [
                ...elementsSnapshot,
                {
                    id: `element_${nextId++}`,
                    ...element,
                },
            ]
        ))
    }

    const edit = element => {
        elements.update(elementsSnapshot => {
            const index = elementsSnapshot.findIndex(el => el.id === element.id)
            if (index > -1) {
                elementsSnapshot[index] = {
                    ...elementsSnapshot[index],
                    ...element,
                }
            }

            return [...elementsSnapshot]
        })
    }

    const remove = id => {
        elements.update(elementsSnapshot => (
            [...elementsSnapshot.filter(el => el.id !== id)]
        ))
    }

    const clear = () => {
        elements.set([])
    }

    return {
        ...elements,
        add,
        edit,
        remove,
        clear,
    }
}

export const elements = elementsStore()

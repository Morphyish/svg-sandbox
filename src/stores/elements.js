import { writable } from 'svelte/store'

function elementsStore() {
    const elements = writable([])
    let nextId = 0

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

    const edit = (id, partial) => {
        elements.update(elementsSnapshot => {
            const index = elementsSnapshot.findIndex(el => el.id === id)
            if (index) {
                elementsSnapshot[index] = {
                    ...elementsSnapshot[index],
                    ...partial,
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
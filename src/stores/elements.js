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

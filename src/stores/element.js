import { writable } from 'svelte/store'

function elementStore() {
    const initState = {
        tag: '',
    }

    const element = writable({ ...initState })

    const reset = () => {
        element.set({ ...initState })
    }

    return {
        ...element,
        reset,
    }
}

export const element = elementStore()

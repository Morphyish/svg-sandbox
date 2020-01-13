import { writable } from 'svelte/store'

function elementFormStore() {
    const initState = {
        tag: '',
    }

    const element = writable({ ...initState })

    const setTo = el => {
        element.set({ ...el })
    }

    const reset = () => {
        element.set({ ...initState })
    }

    return {
        ...element,
        setTo,
        reset,
    }
}

export const elementForm = elementFormStore()

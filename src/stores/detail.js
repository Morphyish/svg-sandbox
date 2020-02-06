import { writable } from 'svelte/store'

function detailStore() {
    const detail = writable(undefined)

    const openWith = element => detail.set(element)

    const close = () => detail.set(undefined)

    return {
        ...detail,
        openWith,
        close,
    }
}

export const detail = detailStore()

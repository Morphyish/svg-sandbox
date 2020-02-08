import { writable } from 'svelte/store'

function detailStore() {
    const detail = writable(undefined)

    const select = node => detail.set(node)

    const close = () => detail.set(undefined)

    return {
        ...detail,
        select,
        close,
    }
}

export const detail = detailStore()

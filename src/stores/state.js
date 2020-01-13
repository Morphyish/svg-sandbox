import { writable } from 'svelte/store'

function stateStore() {
    const list = 'LIST'
    const form = 'FORM'

    const state = writable(list)

    const goTo = nextState => {
        state.set(nextState)
    }

    return {
        ...state,
        goTo,
        list,
        form,
    }
}

export const state = stateStore()

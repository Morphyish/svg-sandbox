import { writable } from 'svelte/store'

function stateStore() {
    const list = 'LIST'
    const form = 'FORM'
    const imprt = 'IMPORT'
    const exprt = 'EXPORT'

    const state = writable(list)

    const goTo = nextState => {
        state.set(nextState)
    }

    return {
        ...state,
        goTo,
        list,
        form,
        import: imprt,
        export: exprt,
    }
}

export const state = stateStore()

<script>
    import ItemDetails from './ItemDetails.svelte'

    export let element

    import { state } from '../stores'

    const editElement = () => {
        state.goTo(state.form)
    }
</script>

<li>
    <details>
        <summary>
            {element.name}

            <div class="actions">
                <button type="button" on:click={() => editElement(element)}>EDIT</button>
                <button type="button">DELETE</button>
            </div>
        </summary>

        <p>
            <ItemDetails {element} />
        </p>
    </details>
</li>

<style>
    li + li {
        border-top: 1px solid #c7c7c7;
    }

    summary {
        display: flex;
        align-items: center;
        text-transform: capitalize;
        padding: .75rem .25rem;
    }

    details p {
        margin: 0;
        padding: 0 .5rem .75rem .5rem;
    }

    .actions {
        margin-left: auto;
    }

    .actions button {
        margin: 0;
    }
</style>

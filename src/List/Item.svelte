<script>
    import ItemDetails from './ItemDetails.svelte'

    export let element

    import { elementForm, elements, state } from '../stores'

    const editElement = el => {
        elementForm.setTo(el)
        state.goTo(state.form)
    }
</script>

<li>
    <details>
        <summary>
            {element.tag}

            <div class="actions">
                <button type="button" on:click={() => editElement(element)}>EDIT</button>
                <button type="button" on:click={() => elements.remove(element.id)}>DELETE</button>
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
        padding: 1rem;
    }

    details p {
        margin: 0;
        padding: 1rem;
    }

    .actions {
        margin-left: auto;
    }

    .actions button {
        margin: 0;
    }
</style>

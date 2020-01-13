<script>
    import { element, elements, state } from '../stores'

    const newElement = () => {
        element.reset()
        state.goTo(state.form)
    }
</script>

<ul>
    {#each $elements as element}
        <li>
            {element.tag}
            <button type="button" on:click={() => elements.remove(element.id)}>DELETE</button>
        </li>
    {:else}
        <p>
            <em>Empty SVG</em>
        </p>
    {/each}
</ul>

<div>
    <button type="button" on:click={newElement}>NEW</button>
</div>

<style>
    ul {
        padding: 0;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }
</style>

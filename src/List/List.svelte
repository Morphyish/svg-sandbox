<script>
    import Item from './Item.svelte'
    import { elementForm, elements, state } from '../stores'

    const newElement = () => {
        elementForm.reset()
        state.goTo(state.form)
    }
</script>

<ul>
    {#each $elements as element}
        <Item {element} />
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
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
</style>

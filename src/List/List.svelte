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

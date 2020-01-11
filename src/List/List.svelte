<script>
    export let elements

    import { createEventDispatcher } from 'svelte'

    const eventDispatcher = createEventDispatcher()
</script>

<ul>
    {#each elements as element}
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
    <button type="button" on:click={() => eventDispatcher('new')}>NEW</button>
</div>

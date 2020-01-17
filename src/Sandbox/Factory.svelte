<script>
    import Element from './Element.svelte'

    export let element
</script>

{#if element.type === 'element'}
    <Element {...element}>
        {#each element.children as child}
            <svelte:self element={child} />
        {/each}
    </Element>
{:else if element.type === 'text'}
    {element.value}
{:else}
    {#each element.children as child}
        <svelte:self element={child} />
    {/each}
{/if}

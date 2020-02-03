<script>
    import CustomElement from './Element.svelte'

    export let element
</script>

{#if element.type === 'element'}
    <CustomElement {...element}>
        {#each element.children as child}
            <svelte:self element={child} />
        {/each}
    </CustomElement>
{:else if element.type === 'text'}
    {element.value}
{:else}
    {#each element.children as child}
        <svelte:self element={child} />
    {/each}
{/if}

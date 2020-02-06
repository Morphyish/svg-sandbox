<script>
    import Group from './Group.svelte'
    import Layer from './Layer.svelte'

    export let element
    export let open

    console.log(element.tagName, open)

    const canContainChildren = ['svg', 'defs', 'g', 'mask']
</script>

{#if element.type === 'element' && canContainChildren.includes(element.tagName)}
    <Group {...element} {open}>
        {#each element.children as child}
            <svelte:self element={child} />
        {/each}
    </Group>
{:else if element.type === 'element'}
    <Layer {...element} />
{:else}
    {#each element.children as child}
        <svelte:self element={child} />
    {/each}
{/if}

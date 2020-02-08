<script>
    import CustomElement from './Element.svelte'

    import { elements } from '../stores'

    export let node = {}

    let element

    $: element = $elements[node.id] || {}
</script>

{#if element.type === 'element'}
    <CustomElement {...element}>
        {#each node.children as child}
            <svelte:self node={child} />
        {/each}
    </CustomElement>
{:else if element.type === 'text'}
    {element.value}
{:else if node.children}
    {#each node.children as child}
        <svelte:self node={child} />
    {/each}
{/if}

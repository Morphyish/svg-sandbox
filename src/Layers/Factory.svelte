<script>
    import Group from './Group.svelte'
    import Layer from './Layer.svelte'

    import { elements } from '../stores'

    export let node = {}
    export let open

    let element

    $: element = $elements[node.id] || {}

    const canContainChildren = ['svg', 'defs', 'g', 'mask', 'switch']
</script>

{#if element.type === 'element' && canContainChildren.includes(element.tagName)}
    <Group {...element} {open}>
        {#each node.children as child}
            <svelte:self node={child} />
        {/each}
    </Group>
{:else if element.type === 'element'}
    <Layer {node} {element} />
{:else if node.children}
    {#each node.children as child}
        <svelte:self node={child} />
    {/each}
{/if}

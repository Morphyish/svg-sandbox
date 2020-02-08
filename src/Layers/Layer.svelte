<script>
    import { detail } from '../stores'

    export let node
    export let element

    const handleClick = () => detail.select(node)
</script>

<li>
    <div class="menuitem" class:selected={$detail === node} role="button" tabindex="0" on:click={handleClick}>
        {element.tagName}
    </div>
</li>

<style>
    .menuitem {
        padding: .25rem;
        cursor: pointer;
        border-left: 3px solid transparent;
    }

    .menuitem:hover,
    .menuitem:focus,
    .menuitem:active {
        color: var(--primary);
    }

    .menuitem.selected {
        border-left: 3px solid var(--primary);
    }
</style>

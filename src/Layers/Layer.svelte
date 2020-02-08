<script>
    import { detail } from '../stores'

    export let element

    const handleClick = () => detail.openWith(element)
</script>

<li>
    <div class="menuitem" class:selected={$detail === element} role="button" tabindex="0" on:click={handleClick}>
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

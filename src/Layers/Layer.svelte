<script>
    import { detail } from '../stores'

    export let element

    const handleClick = () => detail.openWith(element)
</script>

<li>
    <div class="menuitem" role="button" tabindex="0" on:click={handleClick}>
        {element.tagName}
    </div>
</li>

<style>
    .menuitem {
        padding: .25rem;
        cursor: pointer;
    }

    .menuitem:hover,
    .menuitem:focus,
    .menuitem:active {
        color: var(--primary);
    }
</style>

<script>
    export let tagName
</script>

<li>
    <div class="menuitem" role="button" tabindex="0">
        {tagName}
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

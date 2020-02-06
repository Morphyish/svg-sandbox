<script>
    export let tagName
    export let open
</script>

<li>
    <details {open}>
        <summary>
            {tagName}
        </summary>

        <ul>
            <slot />
        </ul>
    </details>
</li>

<style>
    summary {
        padding: .25rem;
        cursor: pointer;
    }
</style>

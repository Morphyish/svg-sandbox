<script>
    export let name
    export let label
    export let value
    export let required
</script>

<label for={name}>
    {label}
    {#if required}
        <strong>*</strong>
    {/if}
</label>
<input id={name} {name} bind:value={value} {required} />

<style>
    input {
        width: 100%;
    }

    strong {
        color: var(--primary);
    }
</style>

<script>
    export let element = {}

    let keys = []

    $: keys = Object.keys(element).filter(key => element.hasOwnProperty(key) && element[key] !== undefined)
</script>

<ul>
    {#each keys as key (key)}
        <li>{key}: <strong>{element[key]}</strong></li>
    {/each}
</ul>

<script>
    import { commonSchema, elementsSchema, stylesSchema } from '../utils'

    export let element = {}

    let keys = []
    let properties = []

    $: properties = {
        ...commonSchema,
        ...elementsSchema[element.tag].attributes,
        ...stylesSchema,
    }
    $: keys = Object.keys(element).filter(key => element.hasOwnProperty(key) && properties.hasOwnProperty(key) && element[key] !== undefined)
</script>

<ul>
    {#each keys as key (key)}
        <li>{properties[key].label}: <span class="value">{element[key]}</span></li>
    {/each}
</ul>

<style>
    .value {
        color: var(--primary);
    }
</style>

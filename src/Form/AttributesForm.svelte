<script>
    import Input from '../components/Input.svelte'

    import { elementsSchema } from '../utils'

    export let element = {}

    let attributes = []
    let keys = []

    $: attributes = elementsSchema[element.tag].attributes
    $: keys = Object.keys(attributes).filter(key => attributes.hasOwnProperty(key))
</script>

{#each keys as key (key)}
    <Input {...attributes[key]} bind:value={element[key]} />
{/each}

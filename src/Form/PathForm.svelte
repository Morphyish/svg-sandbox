<script>
    import Input from '../components/Input.svelte'

    export let element
</script>

<Input name="definition" label="Definition" bind:value={element.d} required />

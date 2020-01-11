<script>
    import Input from '../components/Input.svelte'

    export let element
</script>

<Input name="points" label="Points" bind:value={element.points} required />

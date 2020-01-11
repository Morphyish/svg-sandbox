<script>
    import Input from '../components/Input.svelte'

    export let element
</script>

<Input type="number" name="starting_position_x" label="Starting position X" bind:value={element.x1} required />

<Input type="number" name="starting_position_y" label="Starting position Y" bind:value={element.y1} required />

<Input type="number" name="ending_position_x" label="Ending position X" bind:value={element.x2} required />

<Input type="number" name="ending_position_y" label="Ending position Y" bind:value={element.y2} required />

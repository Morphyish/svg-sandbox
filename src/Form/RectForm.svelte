<script>
    import Input from '../components/Input.svelte'

    export let element
</script>

<Input type="number" name="starting_position_x" label="Starting position X" bind:value={element.x} required />

<Input type="number" name="starting_position_y" label="Starting position Y" bind:value={element.y} required />

<Input type="number" name="radius_x" label="Angle radius X" bind:value={element.rx} />

<Input type="number" name="radius_y" label="Angle radius Y" bind:value={element.ry} />

<Input type="number" name="height" label="Height" bind:value={element.height} required />

<Input type="number" name="width" label="Width" bind:value={element.width} required />

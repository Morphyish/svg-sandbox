<script>
    import Input from '../components/Input.svelte'

    export let element
</script>

<Input name="center_x" label="Center x" bind:value={element.cx} required />

<Input name="center_y" label="Center Y" bind:value={element.cy} required />

<Input name="radius_x" label="Radius X" bind:value={element.rx} required />

<Input name="radius_y" label="Radius Y" bind:value={element.ry} required />


<script>
    import Factory from './Factory.svelte'

    import { svg } from '../stores'

    let zoomIndex = 9
    const zoomValues = [.125, .25, .5, .75, 1, 1.25, 1.5, 2, 3, 5, 10]

    $: zoom = zoomValues[zoomIndex]
    $: height = `${100 * zoom}px`
    $: width = `${100 * zoom}px`

    const zoomOut = () => zoomIndex = Math.max(zoomIndex - 1, 0)
    const zoomIn = () => zoomIndex = Math.min(zoomIndex + 1, zoomValues.length - 1)
</script>

<div class="zoom">
    <em>zoom: {zoom * 100}%</em>
    <button type="button" on:click={zoomOut} disabled={zoomIndex === 0}>-</button>
    <button type="button" on:click={zoomIn} disabled={zoomIndex === zoomValues.length - 1}>+</button>
</div>

<div class="svg-container">
    <div class="svg-holder" style={`--height: ${height};--width: ${width}`}>
        <Factory element={$svg} />
    </div>
</div>

<style>
    .zoom {
        display: flex;
        align-items: center;
        margin-bottom: .5rem;
    }

    .zoom em {
        margin-left: auto;
    }

    .zoom button {
        width: 2rem;
        margin: 0 0 0 .5rem;
    }

    .svg-container {
        display: flex;
        flex-grow: 1;
        overflow: auto;
    }

    .svg-holder {
        margin: auto;
    }

    .svg-holder :global(svg) {
        height: var(--height) !important;
        width: var(--width) !important;
    }
</style>

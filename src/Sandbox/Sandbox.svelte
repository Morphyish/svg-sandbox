<script>
    import Factory from './Factory.svelte'

    import { svg, zoom, minZoom, maxZoom } from '../stores'

    $: height = `${100 * $zoom}px`
    $: width = `${100 * $zoom}px`
</script>

<div class="zoom">
    <em>zoom: {$zoom * 100}%</em>
    <button type="button" on:click={zoom.zoomOut} disabled={$zoom <= minZoom}>-</button>
    <button type="button" on:click={zoom.zoomIn} disabled={$zoom >= maxZoom}>+</button>
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

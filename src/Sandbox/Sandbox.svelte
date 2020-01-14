<script>
    import Line from './Line.svelte'
    import Polyline from './Polyline.svelte'
    import Polygon from './Polygon.svelte'
    import Rect from './Rect.svelte'
    import Circle from './Circle.svelte'
    import Ellipse from './Ellipse.svelte'
    import Path from './Path.svelte'

    import { elements } from '../stores'

    export let instructions

    const svgComponents = {
        line: Line,
        polyline: Polyline,
        polygon: Polygon,
        rect: Rect,
        circle: Circle,
        ellipse: Ellipse,
        path: Path,
    }

    const zoomValues = [.125, .25, .5, .75, 1, 1.25, 1.5, 2, 3, 5, 10]

    $: zoom = zoomValues[instructions.zoom]
    $: height = `${instructions.height * zoom}px`
    $: width = `${instructions.width * zoom}px`

    const zoomOut = () => instructions.zoom = Math.max(instructions.zoom - 1, 0)
    const zoomIn = () => instructions.zoom = Math.min(instructions.zoom + 1, zoomValues.length - 1)
</script>

<div class="zoom">
    <em>zoom: {zoom * 100}%</em>
    <button type="button" on:click={zoomOut} disabled={instructions.zoom === 0}>-</button>
    <button type="button" on:click={zoomIn} disabled={instructions.zoom === zoomValues.length - 1}>+</button>
</div>

<div class="svg-container">
    <div class="svg-holder">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={instructions.viewBox} role="img" {height} {width}>
        {#each $elements as element}
            <svelte:component this={svgComponents[element.tag]} {...element} />
        {/each}
    </svg>
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

    svg {
        stroke: currentColor;
        fill: none;
    }
</style>

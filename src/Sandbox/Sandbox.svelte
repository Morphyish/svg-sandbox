<script>
    import Line from './Line.svelte'
    import Polyline from './Polyline.svelte'
    import Polygon from './Polygon.svelte'
    import Rect from './Rect.svelte'
    import Circle from './Circle.svelte'
    import Ellipse from './Ellipse.svelte'
    import Path from './Path.svelte'

    import { elements } from '../stores'
    import { schema } from '../utils'

    export let instructions

    export const svgComponents = {
        line: Line,
        polyline: Polyline,
        polygon: Polygon,
        rect: Rect,
        circle: Circle,
        ellipse: Ellipse,
        path: Path,
    }
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox={instructions.viewBox} role="img">
    {#each $elements as element}
        <svelte:component this={svgComponents[element.tag]} {...element} />
    {/each}
</svg>

<style>
    svg {
        height: 100%;
        width: 100%;
        stroke: currentColor;
        fill: none;
    }
</style>

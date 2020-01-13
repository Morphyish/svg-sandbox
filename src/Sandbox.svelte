<script>
    export let instructions

    import { elements } from './stores'
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox={instructions.viewBox} role="img">
    {#each $elements as element}
        {#if element.tag === 'line'}
            <line x1={element.x1} x2={element.x2} y1={element.y1} y2={element.y2} stroke={element.stroke} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'polyline'}
            <polyline points={element.points} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'polygon'}
            <polygon points={element.points} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'rect'}
            <rect x={element.x} y={element.y} rx={element.rx} ry={element.ry} height={element.height} width={element.width} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'circle'}
            <circle cx={element.cx} cy={element.cy} r={element.r} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'ellipse'}
            <ellipse cx={element.cx} cy={element.cy} rx={element.rx} ry={element.ry} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
        {#if element.tag === 'path'}
            <path d={element.d} stroke={element.stroke} fill={element.fill} stroke-width={element.strokeWidth} />
        {/if}
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

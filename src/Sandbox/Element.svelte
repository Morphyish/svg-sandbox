<script>
    export let tagName
    export let properties
    export let children
</script>

{#if tagName === 'svg'}
    <svg {...properties}>
        <slot />
    </svg>
{:else if tagName === 'title'}
    <title {...properties}>
        <slot />
    </title>
{:else if tagName === 'desc'}
    <desc {...properties}>
        <slot />
    </desc>
{:else if tagName === 'style'}
    {@html `<style type="text/css">${children.reduce((acc, child) => acc + child.value, '')}</style>`}
{:else if tagName === 'defs'}
    <defs {...properties}>
        <slot />
    </defs>
{:else if tagName === 'g'}
    <g {...properties}>
        <slot />
    </g>
{:else if tagName === 'mask'}
    <mask {...properties}>
        <slot />
    </mask>
{:else if tagName === 'switch'}
    <switch {...properties}>
        <slot />
    </switch>
{:else if tagName === 'use'}
    <use {...properties} />
{:else if tagName === 'circle'}
    <circle {...properties} />
{:else if tagName === 'ellipse'}
    <ellipse {...properties} />
{:else if tagName === 'line'}
    <line {...properties} />
{:else if tagName === 'path'}
    <path {...properties} />
{:else if tagName === 'polygon'}
    <polygon {...properties} />
{:else if tagName === 'polyline'}
    <polyline {...properties} />
{:else if tagName === 'rect'}
    <rect {...properties} />
{/if}

<script>
    import { detail, elements } from '../stores'

    const styles = ['stroke-width', 'stroke', 'fill']

    let properties = []
    $: properties = Object.keys($elements[$detail.id].properties).filter(p => !styles.includes(p))
</script>

<h2>
    <span class="tagName">
        {$elements[$detail.id].tagName}
    </span>
    <span role="button" class="close" tabindex="0" on:click={detail.close}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <line x1="0" y1="0" x2="32" y2="32" />
            <line x1="0" y1="32" x2="32" y2="0" />
        </svg>
    </span>
</h2>

<div>
    <h3>Properties</h3>

    {#each properties as property}
        <label for={property}>{property}</label>
        <input type="text" id={property} name={property} bind:value={$elements[$detail.id].properties[property]}>
    {/each}
</div>

<div>
    <h3>Style</h3>


    {#each styles as style}
        <label for={style}>{style}</label>
        <input type="text" id={style} name={style} bind:value={$elements[$detail.id].properties[style]}>
    {/each}
</div>

<style>
    h2 {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .tagName {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .close {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2rem;
        width: 2rem;
        margin: 0 0 0 .5rem;
        cursor: pointer;
        opacity: .6;
    }

    .close:hover,
    .close:focus,
    .close:active {
        opacity: 1;
    }

    .close svg {
        height: 1rem;
        width: 1rem;
        stroke: currentColor;
        stroke-width: 3px;
    }
</style>

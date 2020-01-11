<script>
    import Input from '../components/Input.svelte'

    import LineForm from './LineForm.svelte'
    import PolylineForm from './PolylineForm.svelte'
    import PolygonForm from './PolygonForm.svelte'
    import RectForm from './RectForm.svelte'
    import CircleForm from './CircleForm.svelte'
    import EllipseForm from './EllipseForm.svelte'
    import PathForm from './PathForm.svelte'

    import { createEventDispatcher } from 'svelte'

    const eventDispatcher = createEventDispatcher()

    export let element
</script>

<form on:submit|preventDefault>
    <fieldset>
        <legend>Element selection</legend>
        <label for="element_tag">Element tag <strong>*</strong></label>
        <select id="element_tag" bind:value={element.tag} required>
            <option value=""></option>
            <option value="line">Line</option>
            <option value="polyline">Polyline</option>
            <option value="polygon">Polygon</option>
            <option value="rect">Rect</option>
            <option value="circle">Circle</option>
            <option value="ellipse">Ellipse</option>
            <option value="path">Path</option>
        </select>
    </fieldset>

    {#if element.tag}
        <fieldset>
            <legend>Element configuration</legend>
            {#if element.tag === 'line'}
                <LineForm bind:element={element} />
            {/if}
            {#if element.tag === 'polyline'}
                <PolylineForm bind:element={element} />
            {/if}
            {#if element.tag === 'polygon'}
                <PolygonForm bind:element={element} />
            {/if}
            {#if element.tag === 'rect'}
                <RectForm bind:element={element} />
            {/if}
            {#if element.tag === 'circle'}
                <CircleForm bind:element={element} />
            {/if}
            {#if element.tag === 'ellipse'}
                <EllipseForm bind:element={element} />
            {/if}
            {#if element.tag === 'path'}
                <PathForm bind:element={element} />
            {/if}
        </fieldset>

        <fieldset>
            <legend>Element styling</legend>
            <Input name="stroke" label="Stroke" bind:value={element.stroke} />

            {#if element.tag !== 'line'}
                <Input name="fill" label="Fill" bind:value={element.fill} />
            {/if}

            <Input name="stroke-width" label="Stroke width" bind:value={element.strokeWidth} />
        </fieldset>
    {/if}

    <div class="button-wrapper">
        <button type="button" on:click={() => eventDispatcher('cancel')}>CANCEL</button>
        <button type="submit">ADD</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    fieldset {
        border: none;
        padding: 0;
        margin: 0;
    }

    fieldset + fieldset {
        margin-top: 2rem;
    }

    legend {
        display: none;
    }

    strong {
        color: #ff3e00;
    }

    select {
        width: 100%;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
</style>

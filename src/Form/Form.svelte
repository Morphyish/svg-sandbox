<script>
    import Input from '../components/Input.svelte'
    import AttributesForm from './AttributesForm.svelte'

    import { state, elementForm } from '../stores'
    import { elementsSchema } from '../utils'

    const components = Object.keys(elementsSchema).filter(key => elementsSchema.hasOwnProperty(key))

    const submitForm = () => {
        state.goTo(state.list)
    }
</script>

<form on:submit|preventDefault={submitForm}>
    <fieldset>
        <legend>Element name</legend>
        <Input name="name" label="Name" bind:value={$elementForm.name} required />
    </fieldset>

    <fieldset>
        <legend>Element selection</legend>
        <label for="element_tag">Element tag <strong>*</strong></label>
        <select id="element_tag" bind:value={$elementForm.tag} required>
            <option value=""></option>
            {#each components as component (component)}
                <option value={component}>{elementsSchema[component].label}</option>
            {/each}
        </select>
    </fieldset>

    {#if $elementForm.tag}
        <fieldset>
            <legend>Element configuration</legend>
            <AttributesForm element={$elementForm} />
        </fieldset>

        <fieldset>
            <legend>Element styling</legend>
            <Input name="stroke" label="Stroke" bind:value={$elementForm.stroke} />

            {#if $elementForm.tag !== 'line'}
                <Input name="fill" label="Fill" bind:value={$elementForm.fill} />
            {/if}

            <Input name="stroke-width" label="Stroke width" bind:value={$elementForm.strokeWidth} />
        </fieldset>
    {/if}

    <div class="button-wrapper">
        <button type="button" on:click={() => state.goTo(state.list)}>CANCEL</button>
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

<script>
    import Form from './Form/Form.svelte'
    import Sandbox from './Sandbox/Sandbox.svelte'
    import List from './List/List.svelte'
    import Import from './Import/Import.svelte'
    import Export from './Export/Export.svelte'

    import { state } from './stores'
</script>

<div class="import_export">
    <button type="button" on:click={() => state.goTo(state.import)}>IMPORT</button>
    <button type="button" on:click={() => state.goTo(state.export)}>EXPORT</button>
</div>
<h1>SVG Sandbox</h1>
<main>
    <section>
        <h2>Configuration</h2>
        {#if $state === state.list}
            <List />
        {:else if $state === state.form}
            <Form />
        {:else if $state === state.import}
            <Import />
        {:else if $state === state.export}
            <Export />
        {/if}
    </section>
    <section>
        <h2>Preview</h2>
        <Sandbox />
    </section>
</main>

<style>
    h1, h2 {
        text-transform: uppercase;
        font-weight: 200;
    }

    h1 {
        text-align: center;
        font-size: 1.5rem;
        color: #ff3e00;
        margin: 1rem;
    }

    h2 {
        margin-top: 0;
        font-size: 1.25rem;
    }

    .import_export {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }

    main {
		display: flex;
        flex: 1;
        max-height: calc(100vh - 4rem);
        padding-bottom: 1rem;
    }

    section {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: .5rem;
        overflow: auto;
    }

    section + section {
        border-left: 1px solid #ff3e00;
    }

    @media (max-width: 959px) {
        h1 {
            text-align: left;
        }

        main {
            flex-direction: column-reverse;
            padding: 0 1rem;
        }

        section + section {
            border-left: 0;
            border-bottom: 1px solid #ff3e00;
        }
    }
</style>

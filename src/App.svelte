<script>
    import Form from './Form/Form.svelte'
    import Sandbox from './Sandbox.svelte'
    import List from './List/List.svelte'

    import { elementForm, elements, state } from './stores'

    let instructions = {}

    const submitForm = () => {
        if ($elementForm.id) {
            elements.edit($elementForm)
        } else {
            elements.add($elementForm)
        }
        state.goTo(state.list)
    }

    const handleCancel = () => {
        state.goTo(state.list)
    }
</script>

<h1>SVG Sandbox</h1>
<main>
    <section>
        <h2>Configuration</h2>
        {#if $state === state.list}
            <List />
        {/if}
        {#if $state === state.form}
            <Form element={$elementForm} on:submit={submitForm} on:cancel={handleCancel} />
        {/if}
    </section>
    <section>
        <h2>Preview</h2>
        <Sandbox {instructions} />
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
    }

    h2 {
        margin-top: 0;
        font-size: 1.25rem;
    }

    main {
		display: flex;
        flex: 1;
        padding: 1rem 0;
    }

    section {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: .5rem;
        height: 100%;
    }

    section + section {
        border-left: 1px solid #ff3e00;
    }
</style>

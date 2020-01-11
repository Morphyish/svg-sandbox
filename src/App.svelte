<script>
    import Form from './Form/Form.svelte'
    import Sandbox from './Sandbox.svelte'
    import List from './List/List.svelte'


    let state = 'list'
    let instructions = {
        elements: [],
    }
    let element

    const resetForm = () => {
        element = {
            tag: '',
        }
    }

    const newElement = () => {
        resetForm()
        state = 'form'
    }

    const addElement = () => {
        if (element.tag) {
            instructions.elements = [
                ...instructions.elements,
                {
                    ...element,
                },
            ]
        }
        state = 'list'
    }

    const handleCancel = () => {
        state = 'list'
    }
</script>

<h1>SVG Sandbox</h1>
<main>
    <section>
        <h2>Configuration</h2>
        {#if state === 'list'}
            <List elements={instructions.elements} on:new={newElement} />
        {/if}
        {#if state === 'form'}
            <Form {element} on:submit={addElement} on:cancel={handleCancel} />
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

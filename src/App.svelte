<script>
    import Sandbox from './Sandbox/Sandbox.svelte'
    import List from './List/List.svelte'
    import Import from './Import/Import.svelte'
    import Export from './Export/Export.svelte'
</script>

<h1>SVG Sandbox</h1>
<div class="container">
    <aside class="svg">
        <h2>My SVG</h2>
        <List />
        <Import />
        <Export />
    </aside>
    <main>
        <h2>Preview</h2>
        <Sandbox />
    </main>
    {#if false}
        <aside class="detail">
        </aside>
    {/if}
</div>

<style>
    .container {
		display: flex;
        flex: 1;
        max-height: calc(100vh - 4rem);
        padding-bottom: 1rem;
    }

    main, aside {
        display: flex;
        flex-direction: column;
        padding: .5rem;
        overflow: auto;
    }

    main {
        flex: 2;
    }

    aside {
        flex: 1;
    }

    aside.svg {
        border-right: 1px solid #ff3e00;
    }

    aside.detail {
        border-left: 1px solid #ff3e00;
    }

    @media (max-width: 959px) {
        h1 {
            text-align: left;
        }

        .container {
            flex-direction: column;
            padding: 0 1rem;
        }

        main {
            order: 0;
        }

        aside {
            order: 1;
            border-top: 1px solid #ff3e00;
        }

        aside.svg {
            border-right: 0;
        }

        aside.detail {
            border-left: 0;
        }
    }
</style>

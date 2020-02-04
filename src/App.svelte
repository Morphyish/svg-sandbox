<script>
    import Sandbox from './Sandbox/Sandbox.svelte'
    import List from './List/List.svelte'
    import Import from './Import/Import.svelte'
    import Export from './Export/Export.svelte'
    import Navigation from './Navigation/Navigation.svelte'

    import { navigation, navigationStates } from './stores'
</script>

<header>
    <h1>SVG Sandbox</h1>
</header>
<div class="container">
    <Navigation />
    <main>
        <section class="side">
            {#if $navigation === navigationStates.LAYERS}
                <List />
            {:else if  $navigation === navigationStates.IMPORT}
                <Import />
            {:else if  $navigation === navigationStates.EXPORT}
                <Export />
            {/if}
        </section>
        <section class="preview">
            <h2>Preview</h2>
            <Sandbox />
        </section>
        {#if false}
            <section class="detail">
            </section>
        {/if}
    </main>
</div>

<style>
    h1 {
        text-align: left;
    }

    .container {
        display: flex;
        flex: 1;
        padding-bottom: 1rem;
    }

    main {
        display: flex;
        flex: 1;
        max-height: calc(100vh - 4rem);
    }

    section {
        display: flex;
        flex-direction: column;
        padding: .5rem;
        overflow: auto;
        flex: 1;
    }

    section.preview {
        flex: 3;
    }

    section.side {
        border-right: 1px solid #ff3e00;
    }

    section.detail {
        border-left: 1px solid #ff3e00;
    }

    @media (max-width: 959px) {
        .container {
            flex-direction: column-reverse;
        }

        main {
            flex-direction: column;
            padding: 0 1rem;
        }

        section {
            order: 1;
            border-top: 1px solid #ff3e00;
        }

        section.preview {
            order: 0;
            border-top: 0;
        }

        section.side {
            border-right: 0;
        }

        section.detail {
            border-left: 0;
        }
    }
</style>

<script>
    import Sandbox from './Sandbox/Sandbox.svelte'
    import Layers from './Layers/Layers.svelte'
    import Detail from './Detail/Detail.svelte'
    import Import from './Import/Import.svelte'
    import Export from './Export/Export.svelte'
    import Navigation from './Navigation/Navigation.svelte'

    import { detail, navigation, navigationStates } from './stores'
</script>

<header>
    <h1>SVG Sandbox</h1>
</header>
<div class="container">
    <Navigation />
    <main>
        <section class="side">
            {#if $navigation === navigationStates.LAYERS}
                <Layers />
            {:else if  $navigation === navigationStates.IMPORT}
                <Import />
            {:else if  $navigation === navigationStates.EXPORT}
                <Export />
            {/if}
        </section>
        <section class="preview">
            <Sandbox />
        </section>
        {#if $detail}
            <section class="detail">
                <Detail />
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
        max-height: calc(100vh - 4rem);
    }

    main {
        display: flex;
        flex: 1;
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
        border-right: 1px solid var(--primary);
    }

    section.detail {
        border-left: 1px solid var(--primary);
    }

    @media (max-width: 959px) {
        .container {
            flex-direction: column-reverse;
            padding-bottom: 0;
        }

        main {
            flex-direction: column;
            padding: 0 1rem;
        }

        section {
            order: 1;
            border-top: 1px solid var(--primary);
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

<script>
    import { navigation, navigationStates } from '../stores'
</script>

<nav>
    <ul>
        <li>
            <a href="#" on:click={navigation.goToLayers} class:active={$navigation === navigationStates.LAYERS}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.239 482.239">
                    <path d="m465.016 0h-344.456c-9.52 0-17.223 7.703-17.223 17.223v86.114h-86.114c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h344.456c9.52 0 17.223-7.703 17.223-17.223v-86.114h86.114c9.52 0 17.223-7.703 17.223-17.223v-344.456c0-9.52-7.703-17.223-17.223-17.223zm-120.56 447.793h-310.01v-310.01h310.011v310.01zm103.337-103.337h-68.891v-223.896c0-9.52-7.703-17.223-17.223-17.223h-223.896v-68.891h310.011v310.01z" />
                </svg>
                <span>Layers</span>
            </a>
        </li>
        <li class="bumper">
            <a href="#" on:click={navigation.goToImport} class:active={$navigation === navigationStates.IMPORT}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.239 482.239">
                    <path d="m0 447.793h482.239v34.446h-482.239z" />
                    <path d="m223.93 65.931v312.971h34.446v-312.971l113.496 113.496 24.22-24.354-154.939-155.073-154.972 155.039 24.287 24.354z" />
                </svg>
                <span>Import</span>
            </a>
        </li>
        <li>
            <a href="#" on:click={navigation.goToExport} class:active={$navigation === navigationStates.EXPORT}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.239 482.239">
                    <path d="m0 447.793h482.239v34.446h-482.239z" />
                    <path d="m396.091 223.863-24.287-24.354-113.462 113.462v-312.971h-34.446v312.971l-113.495-113.496-24.22 24.354 154.938 155.073z" />
                </svg>
                <span>Export</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        width: 4.5rem;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding: .5rem 0;
        margin: 0;
        list-style: none;
    }

    li {
        display: flex;
        height: 4.5rem;
        width: 4.5rem;
        font-size: .75rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    li.bumper {
        margin-top: auto;
    }

    a {
        position: relative;
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: inherit;
        opacity: .6;
    }

    a:focus,
    a:hover,
    a.active {
        color: #ff3e00;
    }

    a.active::after {
        content: '';
        position: absolute;
        background: #ff3e00;
        top: .5rem;
        bottom: .5rem;
        right: 0;
        width: 1px;
    }

    svg {
        height: 1.5rem;
        width: 1.5rem;
        margin-bottom: .25rem;
        fill: currentColor;
    }

    @media (max-width: 959px) {
        nav {
            height: 4.5rem;
            width: 100%;
            z-index: 1;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.20);
        }

        ul {
            flex-direction: row;
            justify-content: space-around;
        }

        li.bumper {
            margin-top: 0;
        }

        a.active::after {
            top: 0;
            left: 0;
            right: 0;
            width: inherit;
            height: 2px;
        }
    }
</style>

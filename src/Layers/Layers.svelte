<script>
    import Factory from './Factory.svelte'

    import { svg } from '../stores'
</script>

<h2>LAYERS</h2>

<ul>
    <Factory node={$svg} open={true} />
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
    }

    ul :global(ul) {
        list-style: none;
        padding-left: 1rem;
    }
</style>

<script>
    import { state, svg } from '../stores'

    const svgAsString = svg.exportAsString()
    const svgAsUrl = svg.exportAsUrl()
</script>

<label for="string_import">Copy code from the text box</label>
<textarea id="string_import" name="string_import" rows="10" value={svgAsString}></textarea>

<p>
    Or download the SVG as a file
</p>
<p class="download-link">
    <a href={svgAsUrl} download>CLICK HERE</a>
</p>

<div class="button-wrapper">
    <button type="button" on:click={() => state.goTo(state.list)}>RETURN</button>
</div>

<style>
    textarea {
        resize: vertical;
    }

    .download-link {
        text-align: center;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
</style>

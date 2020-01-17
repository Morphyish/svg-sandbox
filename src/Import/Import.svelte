<script>
    import { state, svg } from '../stores'

    let svgAsString = ''

    const loadSvg = () => {
        const file = document.getElementById('file_import').files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = event => {
                svg.load(event.target.result)
                state.goTo(state.list)
            }
            reader.onerror = () => {
                console.log('error reading file')
            }
        } else if (svgAsString) {
            svg.load(svgAsString)
            state.goTo(state.list)
        }
    }
</script>

<form on:submit|preventDefault={loadSvg}>
    <label for="file_import">Import from file</label>
    <input type="file" id="file_import" name="file_import" />

    <label for="string_import">Or from string</label>
    <textarea id="string_import" name="string_import" rows="10" bind:value={svgAsString}></textarea>

    <div class="button-wrapper">
        <button type="button" on:click={() => state.goTo(state.list)}>CANCEL</button>
        <button type="submit">SUBMIT</button>
    </div>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    textarea {
        resize: vertical;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
</style>

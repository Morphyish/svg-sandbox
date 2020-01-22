<script>
    import { svg } from '../stores'

    let svgAsString = ''
    let isFormVisible = false

    const showForm = () => isFormVisible = true
    const hideForm = () => isFormVisible = false

    const loadSvg = () => {
        const file = document.getElementById('file_import').files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = event => {
                svg.load(event.target.result)
                hideForm()
            }
            reader.onerror = () => {
                console.log('error reading file')
            }
        } else if (svgAsString) {
            svg.load(svgAsString)
            hideForm()
        }
    }
</script>

{#if isFormVisible}
    <form on:submit|preventDefault={loadSvg}>
        <label for="file_import">Import from file</label>
        <input type="file" id="file_import" name="file_import" />

        <label for="string_import">Or from string</label>
        <textarea id="string_import" name="string_import" rows="10" bind:value={svgAsString}></textarea>

        <div class="button-wrapper">
            <button type="button" on:click={hideForm}>CANCEL</button>
            <button type="submit">SUBMIT</button>
        </div>
    </form>
{:else}
    <p class="center">
        <button type="button" on:click={showForm}>IMPORT SVG</button>
    </p>
{/if}

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    textarea {
        resize: vertical;
    }

    .center {
        text-align: center;
    }

    .button-wrapper {
        display: flex;
        justify-content: space-between;
        margin-top: auto;
    }
</style>

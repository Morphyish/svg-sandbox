<script>
    import { svg } from '../stores'

    let svgAsString = ''

    const loadSvg = () => {
        const file = document.getElementById('file_import').files[0]
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file, 'UTF-8');
            reader.onload = event => {
                svg.load(event.target.result)
            }
            reader.onerror = () => {
                console.log('error reading file')
            }
        } else if (svgAsString) {
            svg.load(svgAsString)
        }
    }
</script>

<h2>IMPORT</h2>

<form on:submit|preventDefault={loadSvg}>
    <label for="file_import">From file</label>
    <input type="file" id="file_import" name="file_import" />

    <label for="string_import">From string</label>
    <textarea id="string_import" name="string_import" rows="10" bind:value={svgAsString}></textarea>

    <button type="submit">SUBMIT</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
    }

    textarea {
        resize: vertical;
    }
</style>

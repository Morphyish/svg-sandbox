<script>
    import { state, svg } from '../stores'

    const svgAsString = svg.exportAsString()
    const svgAsUrl = svg.exportAsUrl()

    const copyToClipboardFallback = () => {
        const textArea = document.createElement('textarea');
        textArea.value = svgAsString;
        textArea.style.position='fixed';  //avoid scrolling to bottom
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    const copyToClipboard = () => {
        if (navigator && navigator.clipboard) {
            navigator.clipboard.writeText(svgAsString).catch(copyToClipboardFallback)
        } else {
            copyToClipboardFallback()
        }
    }
</script>

{#if svgAsString}
    <label for="string_import">SVG code</label>
    <textarea id="string_import" name="string_import" rows="10" value={svgAsString}></textarea>

    <p class="center">
        <button type="button" on:click={copyToClipboard}>COPY SVG</button>
        OR
        <a href={svgAsUrl} download>DOWNLOAD SVG</a>
    </p>
{:else}
    <p class="center">
        <em>No SVG to export</em>
    </p>
{/if}

<div class="button-wrapper">
    <button type="button" on:click={() => state.goTo(state.list)}>RETURN</button>
</div>

<style>
    textarea {
        resize: vertical;
    }

    .center {
        text-align: center;
    }

    .button-wrapper {
        display: flex;
        margin-top: auto;
    }
</style>

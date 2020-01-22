<script>
    import { svg } from '../stores'

    let svgAsString = ''
    let svgAsUrl = ''

    $: $svg, svgAsString = svg.exportAsString()
    $: $svg, svgAsUrl = svg.exportAsUrl()

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

    const downloadSvg = () => {
        if (svgAsString) {
            const a = document.createElement('a');
            a.href = svgAsUrl;
            a.style.position='fixed';  //avoid scrolling to bottom
            a.download = 'my_svg';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
</script>

<div class="button-wrapper">
    <button type="button" on:click={copyToClipboard}>COPY SVG</button>
    <button type="button" on:click={downloadSvg}>SAVE SVG</button>
</div>

<style>
    textarea {
        resize: vertical;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        margin-top: auto;
    }
</style>

const ouvre =
{
    "opuses":
    [
        {
            "name": "Set of Three Miniatures for the Fortepiano (Op. 1)",
            "image": "img/Op. 1_lower.png",
            "stream_link": "https://maryjamesmusic.bandcamp.com/album/conjunto-de-tres-miniaturas-para-el-fortepiano-op-1",
            "sheet_link": "./PDF/Op. 1.pdf"
        },
        {
            "name": "Two submissions (Op. 2)",
            "image": "img/Op. 2_lower.png",
            "stream_link": "https://maryjamesmusic.bandcamp.com/album/dos-propuestas-musicales-op-2",
            "sheet_link": "./PDF/Op. 2.pdf"
        },
        {
            "name": "Set of Three Miniatures for the Fortepiano (Op. 1)",
            "image": "img/Op. 1_lower.png",
            "stream_link": "https://maryjamesmusic.bandcamp.com/album/conjunto-de-tres-miniaturas-para-el-fortepiano-op-1",
            "sheet_link": "./PDF/Op. 1.pdf"
        },
        {
            "name": "Suite (Op. 4)",
            "image": "img/Op. 4_lower.png"
        }
    ]
}

window.onload = function()
{
    function htmlToNode(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    const nNodes = template.content.childNodes.length;
    if (nNodes !== 1) {
        throw new Error(
            `html parameter must represent a single node; got ${nNodes}. ` +
            'Note that leading or trailing spaces around an element in your ' +
            'HTML, like " <img/> ", get parsed as text nodes neighbouring ' +
            'the element; call .trim() on your input to avoid this.'
        );
    }
    return template.content.firstChild;
}
}
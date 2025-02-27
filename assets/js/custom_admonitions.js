document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('blockquote').forEach(function (quote) {
        var firstParagraph = quote.querySelector('p');
        if (!firstParagraph) return;

        // Get the HTML content (preserving links, etc.)
        var html = firstParagraph.innerHTML.trim();

        // Look for an admonition marker at the start (e.g. [!ABSTRACT] or [!THOUGHT])
        var match = html.match(/^\[!(ABSTRACT|THOUGHT)\]\s*/i);
        if (match) {
            // Determine the type (in lowercase)
            var type = match[1].toLowerCase();

            // Remove the marker from the content
            var remainingContent = firstParagraph.innerHTML.substring(match[0].length).trim();

            // Create a new paragraph element
            var newPara = document.createElement('p');
            newPara.innerHTML = remainingContent;
            // Add the corresponding class to the new paragraph
            newPara.classList.add('admonition-' + type);

            // Replace the blockquote with the new paragraph element
            quote.parentNode.replaceChild(newPara, quote);
        }
    });
});


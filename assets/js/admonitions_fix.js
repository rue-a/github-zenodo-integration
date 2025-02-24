document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('blockquote').forEach(function (quote) {
        var firstParagraph = quote.querySelector('p');
        if (!firstParagraph) return;

        // Get the HTML content so that any links are preserved.
        var html = firstParagraph.innerHTML.trim();

        // Look for an admonition marker at the start (e.g. [!TIP], [!WARNING], etc.)
        var match = html.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i);
        if (match) {
            // Get the type and add a class to the blockquote.
            var type = match[1].toLowerCase();
            quote.classList.add('admonition-' + type);

            // Remove the marker from the content.
            var remainingContent = firstParagraph.innerHTML.substring(match[0].length).trim();

            // Format the type for display (capitalize first letter).
            var formattedType = type.charAt(0).toUpperCase() + type.slice(1);
            var prefix = '<strong>' + formattedType + '</strong><br><br>';

            // Prepend the formatted type to the remaining content.
            firstParagraph.innerHTML = prefix + remainingContent;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("a").forEach(link => {
        // Ensure we only modify the text inside the <a> tag, not its attributes or children (e.g., images)
        if (!link.querySelector("img") && link.childNodes.length === 1 && link.firstChild.nodeType === 3) {
            link.innerHTML = link.textContent.replace(/\//g, "/<wbr>");
        }
    });
});

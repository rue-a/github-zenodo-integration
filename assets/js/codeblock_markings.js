document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".language-custom").forEach((codeBlock) => {
        const lines = codeBlock.innerHTML.split("\n").map(line => {
            return line.replace(/^!(\s*)(.*)/, (_, spaces, content) => {
                return `${spaces}<mark>${content}</mark>`;
            });
        });

        codeBlock.innerHTML = lines.join("\n");
    });
});

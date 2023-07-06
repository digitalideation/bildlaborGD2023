window.addEventListener('DOMContentLoaded', function() {
    var sentences = [
        "an image",
        "a filled frame",
        "an alignment of pixels",
        "fragments of light",
        "shadow",
        "a projection",
        "some bits of data",
        "noise",
        "a compression",
        "a story",
        "a memory",
        "a fraction of time",
        "translateable",
        "interpretable",
        "mine or yours",
        "a point of view",



    ];

    var output = document.getElementById('output');
    var currentIndex = 0;

    function displaySentenceByScroll() {
        var scrollPercentage = (window.scrollY || window.pageYOffset) / ((document.documentElement.scrollHeight - window.innerHeight) / 100);
        var sentenceIndex = Math.floor(scrollPercentage / 5.5);

        if (sentenceIndex < sentences.length && sentenceIndex !== currentIndex) {
            currentIndex = sentenceIndex;
            output.textContent = sentences[currentIndex];
        }
    }

    window.addEventListener('scroll', displaySentenceByScroll);
});
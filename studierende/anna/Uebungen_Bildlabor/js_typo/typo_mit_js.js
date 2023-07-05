let el = document.getElementById("varfont");

el.style.fontVariationSettings = '"wdth" 5, "wght" 100, "ital" 0';

// console.log(el)

// Bezeichnungen im CS mit Bindestrich, bei JS mit Klein und Grossbuchstaben ohne Abstand




console.log("ganze hoehe" + document.documentElement.scrollHeight)
console.log("viewport hoehe" + document.documentElement.clientHeight)

const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;

// console.log("onePercent")

document.addEventListener("scroll", (event) => {
    // console.log(window.scrollY)


    let percentScrolled = Math.round(window.scrollY / onePercent) / 100
    let wght = 100 + (percentScrolled * 700);

    // console.log.(percentScrolled)


    let fontvariable = percentScrolled * 700 + 100;
    el.style.fontVariationSettings = '"wdth" 5, "wght" ' + fontvariable + ', "ital" 0';

});


// element: scrollHeight property -> variable font abhängig von scrollposition -> dazu muss die vh abgefragt werden. Diese steht im Verhältnis zum sichtbaren Bereich und zur Dokumentgrösse
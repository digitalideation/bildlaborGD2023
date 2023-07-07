let el = document.getElementById("varfont");
// console.log(el);

//el.style.border = "1px solid red";
el.style.fontSize = "13rem";
el.style.fontVariationSettings = '"wdth" 0, "wght" 0, "ital" 0';


//mit scrollbereich
console.log("ganze hoehe" + document.documentElement.scrollHeight);
//fenserhöhe
console.log("viewport hoehe" + document.documentElement.clientHeight);

const onePercent = (document.documentElement.scrollHeight - document.documentElement.clientHeight) / 100;
console.log(onePercent);



document.addEventListener("scroll", (event) => {

    //console.log(window.scrollY);

    //document height - viewport height = 100 % scroll height


    let percentScrolled = Math.round(window.scrollY / onePercent) / 100;
    //console.log(percentScrolled);

    let fontvariable = percentScrolled * 700 + 100;
    el.style.fontVariationSettings = " 'wdht' 0, 'wght' " + fontvariable + ", 'ital' 0";


});
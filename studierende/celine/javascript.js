//show/hide iframe
function myFunction() {
    var transparent_iframe = document.getElementById("myDIV");



    if (transparent_iframe.style.display === "none") {
        transparent_iframe.style.display = "block";

    } else {
        transparent_iframe.style.display = "none";

    }

}

function myFunction2() {
    var transparent_iframe = document.getElementById("myDIV");
    var quote_1 = document.getElementById("quote1");


    if (transparent_iframe.style.display === "block") {

        quote_1.style.display = "none";
    } else {

        quote_1.style.display = "block";
    }

}


// change the text in the button on click
function handleClick() {
    const btn = document.getElementById('about');
    const initialText = 'About';


    if (btn.textContent.includes(initialText)) {
        btn.textContent = 'Generieren';
    } else {
        btn.textContent = initialText;
    }
}

// let didScroll = false;
// let paralaxTitles = document.querySelectorAll('.paralax-title');

// const scrollInProgress = () => {
//     didScroll = true
// }

// const raf = () => {
//     if (didScroll) {
//         paralaxTitles.forEach((element, index) => {
//             element.style.transform = "translateX(" + window.scrollY / 10 + "%)"
//         })
//         didScroll = false;
//     }
//     requestAnimationFrame(raf);
// }


// requestAnimationFrame(raf);
// window.addEventListener('scroll', scrollInProgress)


// $(document).ready(function() {
//     $('.scroll_top').click(function() {
//         $("html, body").animate({ scrollTop: 0 }, 200);
//         return false;

//     });

// });

// $(window).scroll(function() {
//     if ($(window).scrollTop() == 0) {

//         window.location.reload(false);
//     }
// });
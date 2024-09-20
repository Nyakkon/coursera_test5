window.onload = addTabFocus; 

function addTabFocus() {
    console.log("Page loaded - adding tab focus attribute.");
    const images = document.querySelectorAll('.gallery-img');

    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('focus', function () {
            this.style.border = "2px solid blue";
            console.log('Focus event triggered for image ' + (i + 1));
        });

        images[i].addEventListener('blur', function () {
            this.style.border = "none";
            console.log('Blur event triggered for image ' + (i + 1));
        });

        images[i].addEventListener('mouseover', function () {
            this.style.opacity = "0.8";
            console.log('Mouseover event triggered for image ' + (i + 1));
        });

        images[i].addEventListener('mouseleave', function () {
            this.style.opacity = "1";
            console.log('Mouseleave event triggered for image ' + (i + 1));
        });

        images[i].setAttribute('tabindex', '0');
    }
}

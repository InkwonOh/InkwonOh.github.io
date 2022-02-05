// Gnb
let lastScrollY = 0;
let ticking = false;

function doSomething(scroll_pos) {
    const gnb = document.querySelector('.gnb');
    window.pageYOffset > scroll_pos ? gnb.classList.add('down') : gnb.classList.remove('down');
    lastScrollY = window.pageYOffset;
}

window.addEventListener('scroll', function () {
    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(lastScrollY);
            ticking = false;
        });

        ticking = true;
    }
});


// 페이지 로드 
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'hidden';

    const html = document.documentElement;
    const btnDark = document.querySelector('#btn-theme');
    const storedTheme = localStorage.getItem('darkTheme');

    if (storedTheme !== null) {
        if (storedTheme === 'true') {
            html.classList.add('dark');
            btnDark.setAttribute('data-darkmode', 'true');
        }
    }
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        btnDark.setAttribute('data-darkmode', 'false');
    }

    document.body.style.visibility = 'visible';
})

window.addEventListener('load', function () {
    // Darkmode
    const html = document.documentElement;
    const btnDark = document.querySelector('#btn-theme');

    btnDark.addEventListener('click', function () {
        html.classList.toggle('dark');
        isDarkMode = btnDark.getAttribute('data-darkmode');

        if (isDarkMode === 'false') { // 현재OFF, 버튼눌러서ON
            btnDark.setAttribute('data-darkmode', 'true');
            localStorage.setItem('darkTheme', 'true');
            console.log(localStorage)
        }
        else { // 현재ON, 버튼눌러서OFF
            btnDark.setAttribute('data-darkmode', 'false');
            localStorage.setItem('darkTheme', 'false');
            console.log(localStorage)
        }
    });




    // Go to top



    // Table Of Content
})
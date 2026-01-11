const bodyHidden = () => {
    document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = 'visible';
}

const phoneInp = document.querySelectorAll('input[type="tel"]');

if (phoneInp.length) {
    phoneInp.forEach(el => {
        IMask(el, {
            mask: '+{7}(000) 000-00-00',
        })
    });
}
let theme = localStorage.getItem('theme')
const darkBlock = document.querySelector('.dark-block');
const lightBlock = document.querySelector('.light-block');

const changeTheme = () => {
    if (localStorage.getItem('theme') == 'light-mode') {
        document.querySelector('body').classList.remove('dark-theme')
    } else {
        document.querySelector('body').classList.add('dark-theme')
    }
}


if (!theme) {
    localStorage.setItem('theme', 'light-mode');
}

changeTheme();

if (darkBlock) {
    if (localStorage.getItem('theme') == 'light-mode') {
        darkBlock.classList.remove('active');
        lightBlock.classList.add('active');
    } else {
        darkBlock.classList.add('active');
        lightBlock.classList.remove('active');
    }

    darkBlock.onclick = () => {
        darkBlock.classList.add('active');
        lightBlock.classList.remove('active');
        localStorage.setItem('theme', 'dark-mode');
        changeTheme();
    }
    
    lightBlock.onclick = () => {
        darkBlock.classList.remove('active');
        lightBlock.classList.add('active');
        localStorage.setItem('theme', 'light-mode');
        changeTheme();
    }
}

const voiseRanges = document.querySelectorAll('.voise-range');

if (voiseRanges.length) {
    voiseRanges.forEach(el => {
        const inp = el.querySelector('input');
        const line = el.querySelector('.line');
        const minVal = +el.querySelector('input').min;
        const maxVal = +el.querySelector('input').max;

        const makeLine = () => {
            line.style.width = (100 *(+inp.value - minVal)) / (maxVal - minVal) + '%'
        }

        makeLine();

        inp.oninput = () => makeLine();
    })
}

const lang = document.querySelector('.lang');
const langBtn = document.querySelector('.lang-btn');
const langList = document.querySelectorAll('.lang-list li');

if (lang) {
    langBtn.onclick = () => {
        lang.classList.toggle('active');
    }

    langList.forEach((list, listIdx) => {
        list.onclick = () => {
            lang.classList.remove('active');
            lang.querySelector('span').textContent = list.textContent;
            lang.querySelector('input').value = list.textContent;

            langList.forEach((el, elIdx) => {
                if (elIdx == listIdx) {
                    el.classList.add('selected');
                } else {
                    el.classList.remove('selected');
                }
            })
        }
    })
}

const starBtn = document.querySelectorAll('.star-btn');
if (starBtn.length) {
    starBtn.forEach(btn => {
        btn.onclick = () => {
            btn.classList.toggle('active');
        }
    })
}

window.addEventListener('click', function (e) {
    if (lang) {
        if (!lang.contains(e.target)) {
            lang.classList.remove('active')
        }
    }
})
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

// Navs Voice Slider
const voiceRange = document.querySelector('.voice-range');

if (voiceRange) {
    const updateVoiceSlider = (range) => {
        const value = (range.value - range.min) / (range.max - range.min) * 100;
        range.style.background = `linear-gradient(to right, #FB9E60 0%, #F57173 ${value}%, #d3d3d3 ${value}%, #d3d3d3 100%)`;
    }

    // Initialize
    updateVoiceSlider(voiceRange);

    voiceRange.addEventListener('input', function() {
        updateVoiceSlider(this);
    });
}

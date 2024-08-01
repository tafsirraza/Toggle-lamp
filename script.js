// script.js
document.addEventListener('DOMContentLoaded', () => {
    const lampLight = document.querySelector('.lamp-light');
    const lampSwitch = document.querySelector('.lamp-switch');

    lampSwitch.addEventListener('click', () => {
        if (lampLight.style.opacity === '0') {
            lampLight.style.opacity = '1';
        } else {
            lampLight.style.opacity = '0';
        }
    });
});
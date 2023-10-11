const popUpDisplay = document.getElementById('popup');
const timeout = setTimeout(() => {
    popUpDisplay.style.visibility = 'visible'
    popUpDisplay.style.opacity = '1'
}, 3000);
const exitButton = document.getElementById('exit-button');
exitButton.addEventListener('click', function onClick() {
    popUpDisplay.style.visibility='hidden';
    popUpDisplay.style.opacity='0';
    exitButton.removeEventListener('click', onClick);
})


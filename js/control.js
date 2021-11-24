const startButton = document.getElementById('start-button');

const frame = document.getElementById('frame');
const frameToHiddenBtn = document.getElementById('frame-to-hidden-btn');
const frameToNormalBtn = document.getElementById('frame-to-normal-btn');
const frameToTurnBtn = document.getElementById('frame-to-turn-btn');

// При клике на стартовую кнопку - убираем её и показываем псевдобраузер
startButton.addEventListener('click', () => {
    startButton.classList.add('start-button_hidden');
    frame.classList.remove('frame_hidden');
});

// При клике на кнопку закрытия псевдобраузера (красную) - убираем его и показываем стартовую кнопку
frameToHiddenBtn.addEventListener('click', () => {
    startButton.classList.remove('start-button_hidden');
    frame.classList.add('frame_hidden');
});


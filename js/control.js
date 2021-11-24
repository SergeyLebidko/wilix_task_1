const HIDDEN = 'hidden';
const NORMAL = 'normal';
const FULL_SCREEN = 'full_screen';
const TURN = 'turn';

let lastFrameMode = null;
let curFrameMode = HIDDEN;

const startBtn = document.getElementById('start-button');

const frame = document.getElementById('frame');
const frameRedBtn = document.getElementById('frame-red-btn');
const frameYellowBtn = document.getElementById('frame-yellow-btn');
const frameGreenBtn = document.getElementById('frame-green-btn');

// При клике на стартовую кнопку - убираем её и показываем псевдобраузер
startBtn.addEventListener('click', () => {
    startBtn.classList.add('start-button_hidden');
    setFrameMode(NORMAL);
});

// При клике на кнопку закрытия псевдобраузера (красную) - убираем его и показываем стартовую кнопку
frameRedBtn.addEventListener('click', () => {
    startBtn.classList.remove('start-button_hidden');
    setFrameMode(HIDDEN);
});

// При клике на желтую кнопку - сворачиваем псевдобраузер в "трей" или разворачиваем его оттуда
frameYellowBtn.addEventListener('click', () => {
    if(curFrameMode === FULL_SCREEN || curFrameMode === NORMAL) {
        setFrameMode(TURN);
        return;
    }
    setFrameMode(lastFrameMode);
});

// При клике на зеленую кнопку - разворачиваем псевдобраузер на "весь экран" или восстанавливаем его до нормальных размеров
frameGreenBtn.addEventListener('click', () => {
    if (curFrameMode === FULL_SCREEN){
        setFrameMode(NORMAL);
        return;
    }
    setFrameMode(FULL_SCREEN);
});

function setFrameMode(mode) {
    let classesList = ['frame'];
    switch (mode) {
        case HIDDEN: {
            classesList.push('frame_hidden');
            break;
        }
        case NORMAL: {
            classesList.push('frame_normal');
            break;
        }
        case FULL_SCREEN: {
            classesList.push('frame__full_screen');
            break;
        }
        case TURN: {
            classesList.push('frame_turn');
        }
    }
    frame.className = classesList.join(' ');
    lastFrameMode = curFrameMode;
    curFrameMode = mode;
}
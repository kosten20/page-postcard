import Typed from './node_modules/typed.js/src/typed.js';

var typed = new Typed('.element', {
    strings: [
        'Девчонки!',
        'Мамы!',
        'Бабушки!',
        'Женщины!',
    ],
    typeSpeed: 150, //скорость написания
    startDelay: 1000, //первоначальная задержка
    backSpeed: 125, //стирает
    smartBackspace: false, //?
    backDelay: 1000, //задержка перед стиранием
    loop: true,
    loopCount: Infinity,
});
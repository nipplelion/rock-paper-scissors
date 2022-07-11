function textTyper(text, interval) {
    let index = 0;
    let introTyper = setInterval(function() {
        if (index < text.length) {
            intro.textContent += text.charAt(index);
            index += 1;
        } else {
            clearInterval(introTyper);
        }
    }, interval);
}

let intro = document.querySelector('.intro');
let text1 = "Pitou, a chimera ant, has killed your friend! ";
let text2 = "She's threatening humanity by using your murdered friends as puppets. ";
let text3 = "Avenge Kite, Gon, only YOU can save the world";
let text4 = "...";

textTyper(text1, 80);

setTimeout(function () { textTyper(text2, 70); }, 4300);
setTimeout(function () { textTyper(text3, 70); }, 10500);
setTimeout(function() { textTyper(text4, 300); }, 14000);

setTimeout(function() { window.location.replace('game.html'); }, 18000);
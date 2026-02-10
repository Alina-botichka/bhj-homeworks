const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let isCookieBig = false;

cookie.onclick = function() {
    let currentCount = Number(counter.textContent);
    currentCount++;
    counter.textContent = currentCount;
    
    if (isCookieBig) {
        cookie.width = 200;
        cookie.height = 130;
    } else {
        cookie.width = 220;
        cookie.height = 150;
    }
    
    isCookieBig = !isCookieBig;
};
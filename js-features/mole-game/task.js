function getHole(index) {
  return document.getElementById(`hole${index}`);
}

const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

function resetGame() {
  dead = 0;
  lost = 0;
  deadCounter.textContent = dead;
  lostCounter.textContent = lost;
}

function checkGameStatus() {
  if (dead >= 10) {
      alert('Победа! Вы убили 10 кротов!');
      resetGame();
      return true;
  }
  
  if (lost >= 5) {
      alert('Вы проиграли! У вас 5 промахов!');
      resetGame();
      return true;
  }
  
  return false;
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);
  
  hole.onclick = function() {
      if (this.className.includes('hole_has-mole')) {
          dead++;
          deadCounter.textContent = dead;
          
          this.classList.remove('hole_has-mole');
      } else {
          lost++;
          lostCounter.textContent = lost;
      }
      
      checkGameStatus();
  };
}
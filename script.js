const emojis = [
  '🌴',
  '🌴',
  '😁',
  '😁',
  '😶‍🌫️',
  '😶‍🌫️',
  '☠️',
  '☠️',
  '👽',
  '👽',
  '🎆',
  '🎆',
  '🥽',
  '🥽',
  '💫',
  '💫',
];

var shuffEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (var i = 0; i < emojis.length; i++) {
  let box = document.createElement('div');
  box.className = 'item';
  box.innerHTML = shuffEmojis[i];

  box.onclick = function () {
    this.classList.add('boxOpen');
    setTimeout(function () {
      if (document.querySelectorAll('.boxOpen').length > 1) {
        if (
          document.querySelectorAll('.boxOpen')[0].innerHTML ==
          document.querySelectorAll('.boxOpen')[1].innerHTML
        ) {
          document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
          document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');

          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');

          if (document.querySelectorAll('.boxMatch').length == emojis.length) {
            alert('you have won!🎆');
          }
        } else {
          document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
          document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
        }
      }
    }, 700);
  };
  document.querySelector('.game').appendChild(box);
}

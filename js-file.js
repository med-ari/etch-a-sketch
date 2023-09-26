let gnumber = 0;

const btn = document.querySelector('.prompt');
btn.addEventListener('click', () => {
  do {
    gnumber = prompt('grid number:');
  } while (gnumber > 100 || gnumber < 0);

  document.body.textContent = '';
  document.body.appendChild(btn);

  for (let j = 0; j < gnumber; j++) {
    let container = document.createElement('div');
    container.setAttribute('class', 'container');
    document.body.appendChild(container);
    for (let i = 0; i < gnumber; i++) {
      let div = document.createElement('div');
      div.setAttribute('class', 'grid');
      container.appendChild(div);
    }
  }

  const squares = document.querySelectorAll('.grid');
  let total = gnumber * gnumber;

  /*   for (let k = 0; k < total; k++) {
    squares[k].addEventListener('mouseover', () => {
      squares[k].setAttribute('class', 'changeColor');
    });
    squares[k].addEventListener('mouseleave', () => {
      squares[k].removeAttribute('class', 'changeColor');
    });
  } */

  function random(max) {
    return Math.floor(Math.random() * max + 1);
  }

  let randomCol = () =>
    `rgb(${random(255)}, ${random(255)}, ${random(255)})`;

  for (let k = 0; k < total; k++) {
    squares[k].addEventListener('mouseover', () => {
      squares[k].style.setProperty('background-color', randomCol());
    });
    squares[k].addEventListener('mouseleave', () => {
      squares[k].style.setProperty('background-color', 'white');
    });
  }

  /* squares.forEach((grid) => {
  grid.addEventListener('mouseover', () => {
    let ids = grid.id;
    ids.setAttribute('class', 'colorChange');
  });
}); */
});

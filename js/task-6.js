function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  const input = document.querySelector('input[type="number"]');
  const createBtn = document.querySelector('button[data-create]');
  const desrtroyBtn = document.querySelector('button[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function createBoxes(amount) {
   boxesContainer.innerHTML = '';

    let size = 30;

     for (let i = 0; i < amount; i++) {

    const box = document.createElement('div');
     box.style.width = `${size}px`;
     box.style.heigh = `${size}px`;
     box.style.backgroundColor = getRandomHexColor();

     boxesContainer.appendChild(box);
     size += 10;
   }
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if(amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    }
     else {
      alert()
     }
  });

  desrtroyBtn.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
  });

  
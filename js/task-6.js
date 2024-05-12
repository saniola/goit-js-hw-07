document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  function createBoxes(amount) {
    destroyBoxes();
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxes.push(box);
      size += 10;
    }

    boxesContainer.append(...boxes);
  }

  createBtn.addEventListener('click', () => {
    const num = parseInt(input.value);

    if (num >= 1 && num <= 100) {
      createBoxes(num);

      input.value = '';
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
});

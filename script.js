const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slide = document.querySelector('.carousel-slide');

let counter = 0;

nextBtn.addEventListener('click', () => {
  if (counter === -100 * (slide.children.length - 1)) return;
  counter -= 100;
  slide.style.transform = `translateX(${counter}%)`;
});

prevBtn.addEventListener('click', () => {
  if (counter === 0) return;
  counter += 100;
  slide.style.transform = `translateX(${counter}%)`;
});

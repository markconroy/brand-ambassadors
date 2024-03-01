const message = document.querySelector('.input-message');
const whatWasSaidInput = document.querySelector('.input-what');
const whoSaidItInput = document.querySelector('.input-who');
const whatWasSaid = document.querySelector('.what-was-said');
const whoSaidIt = document.querySelector('.who-said-it');
const postButton = document.querySelector('.post-button');
const imageContainer = document.querySelector('#image');

whatWasSaidInput.addEventListener('input', () => {
  console.log(whatWasSaidInput.value);
  whatWasSaid.textContent = whatWasSaidInput.value;
});

whoSaidItInput.addEventListener('input', () => {
  whoSaidIt.textContent = whoSaidItInput.value;
});

postButton.addEventListener('click', () => {
  html2canvas(document.querySelector("#container")).then(canvas => {
    const base64image = canvas.toDataURL("image/png");
    image.querySelector('img').src = base64image;
  });
})
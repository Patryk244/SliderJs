const buttonLeft = document.querySelector('.buttonLeft');
const buttonRight = document.querySelector('.buttonRight');
const img = document.querySelector('img');


const toggleImage = () => {
  const images = ['ImageOne', 'ImageTwo', 'ImageThree', 'ImageFour'];
  let active = 0
  img.setAttribute('src', `./img/${images[active]}.jpg`);
  

  function toggleIncrement() {
    active++;
    img.setAttribute('src', `./img/${images[active]}.jpg`); 
    
    if (active == images.length) {
      active = 0
      img.setAttribute('src', `./img/${images[active]}.jpg`); 
    }
    
    
    console.log('right', active);
  }

  function toggleDecrement() {
    active--;
    img.setAttribute('src', `./img/${images[active]}.jpg`); 
    
    if (active == -1) {
      active = images.length - 1;
      img.setAttribute('src', `./img/${images[active]}.jpg`); 
    }
  }


  function keyToggleIncrementAndDecrement(e) {
    if (e.keyCode == '39') {
      toggleIncrement();
    } else if (e.keyCode == '37') {
      toggleDecrement();
    }
  }
  
  buttonRight.addEventListener('click', toggleIncrement);
  buttonLeft.addEventListener('click', toggleDecrement);
  window.addEventListener('keydown', keyToggleIncrementAndDecrement);
}

toggleImage()


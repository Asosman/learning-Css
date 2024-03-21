const backdropElement = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const selectPlanButton = document.querySelectorAll('.plan button');
const noSelctButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

console.log(backdropElement);
// backdropElement.style.display = 'block'

for( var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener('click',function(){
        // backdropElement.style.display = 'block';
        // modal.style.display= 'block';
        backdropElement.style.display = 'block';
        setTimeout(function(){
            backdropElement.classList.add('open');
        },10)
      if(modal){
          modal.classList.add('open');
      }
    })
}


if(modal){
    noSelctButton.addEventListener('click',closeModal)
}
backdropElement.addEventListener('click',function(){
   mobileNav.classList.remove('open')
    closeModal();
})

function closeModal(){
    // backdropElement.style.display = 'none';
    // modal.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    backdropElement.classList.remove('open');
    setTimeout(function(){
        backdropElement.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click',function(){
    // mobileNav.style.display = 'block';
    // backdropElement.style.display = 'block';
    mobileNav.classList.add('open');
    backdropElement.style.display = 'block';
    setTimeout(function(){
        backdropElement.classList.add('open');
    },10)

})

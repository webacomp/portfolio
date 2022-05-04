
const modal = document.querySelector('.modal')

const loginBtn = document.querySelector('.login-btn')

const closeBtn = document.querySelector('.close')



loginBtn.addEventListener('click', (e) => {
     openModal()
})

closeBtn.addEventListener('click', (e) => {
     closeModal()
})

window.addEventListener('click', (e) => {
    outsideClick(e)
})


function openModal() {
   modal.style.display = 'block'
}

function closeModal() {
   modal.style.display = 'none'
}

function outsideClick(e) {
   if(e.target == modal){
       closeModal()
   }
}
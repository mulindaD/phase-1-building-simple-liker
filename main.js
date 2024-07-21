// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


let emptyHearts = document.querySelectorAll('.like-glyph')
// console.log(emptyHearts)

emptyHearts.forEach(emptyHeart => {
  emptyHeart.addEventListener('click', e => {
    if (emptyHeart.textContent === EMPTY_HEART){
      mimicServerCall()
    .then(res => {
      // console.log(res) 
      emptyHeart.textContent = FULL_HEART
      emptyHeart.classList.add('activated-heart')
    })
    .catch(err => {
      let errorModal = document.querySelector('#modal')
      let modalMessage = document.querySelector('#modal-message')

      errorModal.classList.toggle('hidden')
      modalMessage.textContent = err
      setTimeout(() => {
        errorModal.classList.toggle('hidden')
      }, 3000)
    })
    } else {
      emptyHeart.textContent = EMPTY_HEART
      emptyHeart.classList.remove('activated-heart')
    }
})
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}


// start game all cards blank
// when you click on a card it flips over to show image
// you can only have two cards showing at one time (if they arent matching???)
// when two are the same stay flipped over, 
// use sort & Math.random methods to sort cards randomly 

// add event listener to target the 10 cards
// maybe toggle flipped and not flipped??? idk
// adding src to image and if it doesnt match set back to ""
// setTimeout ===> to flip over if they don't match

//Event Listener to flip the card when it is clicked

// Create an array for all 10 possible cards (two of each image)
const images = [
  'img/delilah.PNG',
  'img/hibiscus.PNG',
  'img/lily.PNG',
  'img/rose.PNG',
  'img/sunflower.PNG',
  'img/delilah.PNG',
  'img/hibiscus.PNG',
  'img/lily.PNG',
  'img/rose.PNG',
  'img/sunflower.PNG',
  'img/flower.PNG',
  'img/flower.PNG',
]
let shuffledImages = []
// created empty array to dictate randomization of cards (images)
while(images.length > 0){
  let randomNumber = Math.floor(Math.random() * images.length)
  shuffledImages.push(images[randomNumber])
  images.splice(randomNumber, 1)
  // randomNumber is the index, and the 1 tells it to remove that one element form the array. When it takes the element out, it makes it so that you can't pull that element again during the loop and it resets the index to the new length until we reach zero
}

const hiddenImages = Array.from(document.querySelectorAll('.hide'))

// hidden images class will be assigned to the selected shuffled Images src
for ( i = 0; i < hiddenImages.length; i++){
  hiddenImages[i].src = shuffledImages[i]
}



let count = 0
// creating a way to hold information for two cards.
function flipCard() {
  // console.log(e.target)
  if (this.children[0].classList.contains('hide') === false) {
    return
  }
  const check = Array.from(document.querySelectorAll('.check'))
  if(check.length > 1){
    return
  }
  this.children[0].classList.toggle('hide')
  this.children[0].classList.add('check')
  this.children[1].classList.toggle('hide')
  this.children[1].classList.add('backside')
  count++
  // console.log(e.target.children, e.target.children[0], e.target.children[1])
  match()
 endGame()
  
}

function match(){
  const twoCards = Array.from(document.querySelectorAll('.check'))
  const backTwoCards= Array.from(document.querySelectorAll('.backside'))
  if (count % 2 === 0){
    if (twoCards[0].src === twoCards[1].src){
      twoCards.forEach(image => image.classList.remove('check'))
    } else{ //remove check and toggle hide after 5 seconds
      setTimeout(function(){
        backTwoCards.forEach(image => image.classList.toggle('hide'))
        twoCards.forEach(image => image.classList.remove('check'))
        twoCards.forEach(image => image.classList.toggle('hide'))
      },1000)
      count -= 2
    }
    backTwoCards.forEach(image => image.classList.remove('backside'))
  } else{
    return
  }
}


function endGame(){
  if (count === 12){
   document.querySelector('.result').innerText = 'You are a Winner! Great Job !!'
    }

}

const startOver = () => {
  location.reload()
}

document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard))
document.querySelector('button').addEventListener('click', startOver)
//if count is even, run function that checks if src matches
        //if src is same then take away event listener and always have it showing
        //if src is different then setTimeout to toggle them back ie. run flip card
//if count is odd return



// i is iterating through the cards, starting from the first card
// imgArray.forEach((e, i) => e.src = cards[i]) 



// if src === src then they match


    // https://www.w3schools.com/jsref/met_loc_reload.asp
    // const startOver = () => {
    //     location.reload()
    // }

    // document.querySelector('button').addEventListener('click', startOver)

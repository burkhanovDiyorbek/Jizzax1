console.log('Hello World!');
let menu_icon = document.querySelector('.menu-icon')
let menu_details = document.querySelector('.menu-details');
let summary_plus = document.querySelector('.summaryPlus');
let summaryEl = document.querySelectorAll('summary');
let cards = document.querySelectorAll('.card')
let card_title = document.querySelector('.card-title')
let card_about = document.querySelector('.card-about')
let myNumberTwo = document.querySelector('.myNumberTwo')
let myNumberThree = document.querySelector('.myNumberThree')
let h1 = document.querySelector('.myNumber');
let modal_back = document.querySelector('.modal-back');
let comment_modal = document.querySelector('.comment_modal');
let addBtn = document.getElementById('add_btn');
let add_af_comment = document.getElementById('add-af-comment')

let commentCard = document.getElementById('fikrlar-cards');

let loader = document.querySelector('.center')

let mode = document.querySelector('.mode')

let body = document.querySelector('body')

let closeIcon = document.querySelector('#close-icon')

 let iconElement = document.getElementById("to-top");


closeIcon.onclick = () => {
  modal_back.classList.remove('modalAf')
}

mode.onclick = () => {
  mode.classList.toggle('modeAf')
  body.classList.toggle('bodyBlack')
}


addBtn.addEventListener('click' , () => {
  alert('go to the top for add a comment')
      modal_back.classList.add('modalAf')

  })
  
add_af_comment.onclick = () => {
  
  if(nameInp.value == '' || surnameInp.value == '' || commentInp.value == '' )
  {
    alert('Please wite your comment')
  }
  
  else{
  let nameInp = document.getElementById('nameInp').value;
  let surnameInp= document.getElementById('surnameInp').value
  let commentInp = document.getElementById('commentInp').value
  commentCard.innerHTML += `
  <li class="fikrlar-card">
    <div class="client-img">
      <img src="/comment.jpg" alt="comment.jpg">
    </div>
    <div class="client-fullname">
      <h5>${nameInp} ${surnameInp}</h5>
      <p>${commentInp} </p>
    </div>
  </li>`
  
  
  modal_back.classList.remove('modalAf')
        alert('Your comment in a progres...')
        
  surnameInp.value = ''
  nameInp.value = ''
  commentInp.value = ''
}

}
menu_icon.onclick = () => {
        menu_icon.classList.toggle('menuAf')
        menu_details.classList.toggle('detailsAf')
}

summaryEl.forEach(function(summary_plus){
  summary_plus.classList.toggle('summaryMinus')
})

cards.forEach(function(card) {
  card.addEventListener('click', function() {
    card.classList.toggle('cardAf');
  });
});


  function scrollFunction() {
    if (window.scrollY >= 1000) {
      let count = 14400;
      let countTwo = 0;
      let countThree = 0;
      const interval = setInterval(() => {
        h1.textContent = count;
        count+=10000;
        
        if (count > 1450000) {
          clearInterval(interval);
        }
      }, 0.001);
      
      const intervalTwo = setInterval(() =>{
        myNumberTwo.textContent = countTwo;
        countTwo++;
        
        if (countTwo>20) {
          clearInterval(intervalTwo)
        }
      } , 100)
      
      const intervalThree = setInterval(() =>  {
        myNumberThree.textContent = countThree;
        countThree++;
        
        if (countThree >314) {
          clearInterval(intervalThree)
        }
      } , 10)
      iconElement.classList.toggle('iconScroll')
      console.log('h');
    }
    iconElement.classList.toggle('iconElScroll')
  }
  window.onscroll = scrollFunction ;
  
  
  

addBtn.onclick = function() {
}


window.onload =   () => {
  loader.style.display = 'none'
}

  iconElement.onclick = function() {
    window.scrollTo(0,0);
    
  }




    AOS.init();

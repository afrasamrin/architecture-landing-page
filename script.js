const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const images = document.querySelector('.projects1').children;

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const totalImages = images.length;
let index = 0;

prev.addEventListener('click', () => {
    nextImage('next');
})

next.addEventListener('click', () => {
    nextImage('prev');
})

function nextImage(direction) {
    if(direction == 'next') {
        index++;
        if(index == totalImages){
            index = 0;
        }
    }else {
        if(index == 0 ) {
            index = totalImages -1;
        } else {
            index--;
        }
    }
    
    for ( let i = 0; i < images.length; i++) {
        images[i].classList.remove('main');
       }
       images[index].classList.add('main');
    }

function store(){
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;

    const mail = {
        name: name,
        number: number,
        subject: subject,
        message: message,
        email: email,
    }
   
    localStorage.setItem("mail",JSON.stringify(mail));

    var storedValue = JSON.parse(localStorage.getItem('mail'));
     console.log(storedValue);
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 10000); // Change image every 2 seconds
}
// var person = { "name": "billy", "age": 23};

// localStorage.setItem('person', JSON.stringify(person)); //stringify object and store
// var retrievedPerson = JSON.parse(localStorage.getItem('person')); //retrieve the object
// console.log(retrievedPerson);
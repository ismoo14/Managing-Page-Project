let menulist = document.querySelector(".menu-list")
let menubtn = document.querySelector(".menu-btn")
let closebtn = document.querySelector(".close-btn")
let close = document.querySelector(".close")
let menu = document.querySelector(".menu")
menulist.style.maxHeight = "0px";

menubtn.addEventListener("click", function(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px"
    }
    menu.classList.add("menu-11")
    close.classList.add("close-11")
})
    
closebtn.addEventListener("click", function(){
    if(menulist.style.maxHeight == "300px"){
        menulist.style.maxHeight = "0px"
    }
    menu.classList.remove("menu-11")
    close.classList.remove("close-11")
})


let currentImageIndex = 0;
const dots = document.querySelectorAll('.dot');
const images = document.querySelectorAll('.your-image-class');

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));

    if (dots[index]) {
        dots[index].classList.add('active');
    }
}


updateDots(currentImageIndex);

// Your keyboard event listener
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        // Increment the index and handle wrapping
        currentImageIndex = (currentImageIndex + 1) % images.length;
    } else if (e.key === 'ArrowLeft') {
        // Decrement the index and handle wrapping
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    }

    // After changing the image, call the updateDots function
    updateDots(currentImageIndex);
    

});


const reviews = [
    {
        id:"1",
        name: "Anisha Li",
        info: "Manage has supercharged our team's workflow. The sustain visibility on large milestone at all times keeps everyone motivated.",
        img: "images/avatar-anisha.png",
    },
    {
        id:"2",
        name: "Ali Bravo",
        info: "We have been able to cancel so many subscriptions since using manage. There is no more cross-channel confusion and everyone is much more focused.",
        img: "./images/avatar-ali.png",
    },
    {
        id:"1",
        name: "Richard Watson",
        info: "Manage allows us to provide structure and process. it keeps us organized and focused. i can't stop recommending them to everyone i talk to!.",
        img: "./images/avatar-richard.png",
    },
];

let currentitem = 0;

const img = document.querySelector(".img");
const name = document.querySelector(".name");
const info = document.querySelector(".info");

window.addEventListener("DOMContentLoaded", function(){
    showperson()
});

function showperson(person){
    const item = reviews[currentitem];
    img.src = item.img
    name.textContent = item.name
    info.textContent = item.info
}

document.addEventListener("keydown", (event) => {
    if(event.key == "ArrowRight"){
        currentitem++
        if(currentitem > reviews.length - 1){
            currentitem = 0
    
        }
    }else if(event.key == "ArrowLeft"){
        currentitem--
        if(currentitem < 0){
            currentitem = reviews.length - 1
        }
    }
    showperson()
    updateDots(currentitem);
})

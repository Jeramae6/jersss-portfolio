/* ==========================================
   STICKY HEADER
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(255,255,255,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";
        header.style.padding = "18px 10%";

    } else {

        header.style.background = "rgba(255,255,255,.15)";
        header.style.boxShadow = "none";
        header.style.padding = "25px 10%";

    }

});


/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   ACTIVE NAV LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", ()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(

".card,.project-card,.info-card,.timeline-item,.stat,.contact-card"

);

function reveal(){

    revealElements.forEach(el=>{

        const windowHeight = window.innerHeight;

        const top = el.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            el.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();


/* ==========================================
   TYPING EFFECT
========================================== */

const text = [

"Web Designer",

"Front-End Developer",

"BSIT Student",

"WordPress Developer"

];

let count = 0;

let index = 0;

let currentText = "";

let letter = "";

const typing = document.querySelector(".hello");

function type(){

    if(!typing) return;

    if(count === text.length){

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if(letter.length === currentText.length){

        count++;

        index = 0;

        setTimeout(type,1200);

    }else{

        setTimeout(type,120);

    }

}

type();


/* ==========================================
   NUMBER COUNTER
========================================== */

const counters = document.querySelectorAll(".stat h2");

const speed = 70;

function startCounter(){

    counters.forEach(counter=>{

        const target = parseInt(counter.innerText);

        let count = 0;

        const update = ()=>{

            const increment = target / speed;

            if(count < target){

                count += increment;

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            }else{

                counter.innerText = target + "+";

            }

        }

        update();

    });

}

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const top = stats.getBoundingClientRect().top;

    if(top < window.innerHeight && !started){

        started = true;

        startCounter();

    }

});


/* ==========================================
   PROJECT CARD TILT
========================================== */

document.querySelectorAll(".project-card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

const rotateY = ((x / rect.width)-0.5)*12;

const rotateX = ((y / rect.height)-0.5)*-12;

card.style.transform =

`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});


/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.className = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/* ==========================================
   LOADING ANIMATION
========================================== */

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/* ==========================================
   PARALLAX BLOBS
========================================== */

document.addEventListener("mousemove",(e)=>{

const blob1=document.querySelector(".blob1");
const blob2=document.querySelector(".blob2");

if(blob1){

blob1.style.transform=`translate(${e.clientX/60}px,${e.clientY/60}px)`;

}

if(blob2){

blob2.style.transform=`translate(${-e.clientX/80}px,${-e.clientY/80}px)`;

}

});

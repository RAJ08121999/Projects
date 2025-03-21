//this is for smooth scroll

var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;


for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
    

        interval = setInterval(function () {
            scrollVertically(targetSection);
        }, 20);
    });
}


function scrollVertically(targetSection) {
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if (targetSectionCoordinates.top <= 0) {
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
}


// this is for animation in the skills bar 


var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills-container');
var animationDone = false;
window.addEventListener('scroll',checkScroll);

// initialise all skills bars with 0 width

function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width = 0 + '%' ;
    }
}


// fill the bars as specified 

function fillBars(){

    for(let bar of progressBars){
        let targetWidth =  bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval =  setInterval(function(){
            if(currentWidth > targetWidth)
            {
                clearInterval(interval);
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        }, 8);
    }
}

// check whether the skills display div is visible or not so that we can trigger the animation

function checkScroll(){

    var coordinates = skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top < window.innerHeight)
    {   
        animationDone = true;
        console.log("animation done");
        fillBars()
    }
    else if(coordinates.top > window.innerHeight)
    {
        animationDone = false;
        initialiseBars();
    }
};
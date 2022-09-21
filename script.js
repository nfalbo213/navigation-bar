
////////////////////
// Global Variables

const navBar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const topSpan = document.getElementById('top-span');
const middleSpan = document.getElementById('middle-span');
const bottomSpan = document.getElementById('bottom-span');
const mobileNavList = document.getElementById('mobile-nav-list');
const navZero = document.getElementById('nav0');
const navOne = document.getElementById('nav1');
const navTwo = document.getElementById('nav2');
const navThree = document.getElementById('nav3');
const navFour = document.getElementById('nav4');

let hamburgerClicked = false;


/////////////
// Functions

hamburger.onpointerdown = (event) => {

    if (!hamburgerClicked) {
        topSpan.style.transform = 'rotate(405deg)';
        topSpan.style.position = 'absolute';
        middleSpan.style.transform = 'rotate(405deg)';
        middleSpan.style.position = 'absolute';
        bottomSpan.style.transform = 'rotate(315deg)';
        bottomSpan.style.position = 'absolute';
        //hamburger.style.justifyContent = 'center';
        mobileNavList.style.display = 'flex';

    // CHANGE BACK BELOW CODE IF REMOVE JQUERY
        //navBar.style.height = '50%';
        //navBar.style.opacity = '.98';

        $( "#navbar" ).animate({
            height: "50%",
            opacity: ".98"
          }, 200 );

        hamburgerClicked = true;

    } else {
        topSpan.style.transform = 'rotate(-360deg)';
        topSpan.style.position = '';
        middleSpan.style.position = '';
        middleSpan.style.transform = 'rotate(-360deg)';
        bottomSpan.style.transform = 'rotate(-360deg)';
        bottomSpan.style.position = '';
        //hamburger.style.justifyContent = '';
        mobileNavList.style.display = '';
        
        // CHANGE BACK BELOW CODE IF REMOVE JQUERY
        //navBar.style.opacity = '';
        //navBar.style.height = '';


        $( "#navbar" ).animate({
            height: "10%",
            opacity: ".95"
          }, 200 );


        hamburgerClicked = false;

          
    }
    
    event.preventDefault();

}

navZero.onpointerup = (event) => {

    topSpan.style.transform = 'rotate(-360deg)';
    topSpan.style.position = '';
    middleSpan.style.position = '';
    middleSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.position = '';
    //hamburger.style.justifyContent = '';
    mobileNavList.style.display = '';

    // CHANGE BACK BELOW CODE IF REMOVE JQUERY
    //navBar.style.opacity = '';
    //navBar.style.height = '';
    
    $( "#navbar" ).animate({
        height: "10%",
        opacity: ".95"
      }, 100 );

    hamburgerClicked = false;

    event.preventDefault();

    window.location.replace("#home");

}

navOne.onpointerup = (event) => {

    topSpan.style.transform = 'rotate(-360deg)';
    topSpan.style.position = '';
    middleSpan.style.position = '';
    middleSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.position = '';
    //hamburger.style.justifyContent = '';
    mobileNavList.style.display = '';

// CHANGE BACK BELOW CODE IF REMOVE JQUERY
    //navBar.style.opacity = '';
    //navBar.style.height = '';
    
    $( "#navbar" ).animate({
        height: "10%",
        opacity: ".95"
      }, 100 );

    hamburgerClicked = false;

    event.preventDefault();

    window.location.replace("#sect1");

}

navTwo.onpointerup = (event) => {

    topSpan.style.transform = 'rotate(-360deg)';
    topSpan.style.position = '';
    middleSpan.style.position = '';
    middleSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.position = '';
    //hamburger.style.justifyContent = '';
    mobileNavList.style.display = '';

    // CHANGE BACK BELOW CODE IF REMOVE JQUERY
    //navBar.style.opacity = '';
    //navBar.style.height = '';
        
    $( "#navbar" ).animate({
        height: "10%",
        opacity: ".95"
      }, 100 );

    hamburgerClicked = false;

    event.preventDefault();

    window.location.replace("#sect2");

}

navThree.onpointerup = (event) => {

    topSpan.style.transform = 'rotate(-360deg)';
    topSpan.style.position = '';
    middleSpan.style.position = '';
    middleSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.position = '';
    //hamburger.style.justifyContent = '';
    mobileNavList.style.display = '';

// CHANGE BACK BELOW CODE IF REMOVE JQUERY
    //navBar.style.opacity = '';
    //navBar.style.height = '';
    
    $( "#navbar" ).animate({
        height: "10%",
        opacity: ".95"
      }, 100 );

    hamburgerClicked = false;

    event.preventDefault();

    window.location.replace("#sect3");

}

navFour.onpointerup = (event) => {

    topSpan.style.transform = 'rotate(-360deg)';
    topSpan.style.position = '';
    middleSpan.style.position = '';
    middleSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.transform = 'rotate(-360deg)';
    bottomSpan.style.position = '';
    //hamburger.style.justifyContent = '';
    mobileNavList.style.display = '';

// CHANGE BACK BELOW CODE IF REMOVE JQUERY
    //navBar.style.opacity = '';
    //navBar.style.height = '';
    
    $( "#navbar" ).animate({
        height: "10%",
        opacity: ".95"
      }, 100 );

    hamburgerClicked = false;

    event.preventDefault();

    window.location.replace("#sect4");

}



// jQuery functions ////////////////////////////


const jButton = document.getElementById('go');

jButton.onpointerup = (event) => {
    
    event.preventDefault();

    console.log('1');

    $( "#block" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );

    console.log('2');
}


/*
$( "#go" ).click(function() {
    $( "#block" ).animate({
      width: "70%",
      opacity: 0.4,
      marginLeft: "0.6in",
      fontSize: "3em",
      borderWidth: "10px"
    }, 1500 );
  });
  */

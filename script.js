/*Copyright 2022 Nick Falbo (https://nick.falbo.dev)
SPDX-License-Identifier: Apache-2.0*/
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


const burgerSpin = () => {

    if (!hamburgerClicked) {

        // Animate top of burger
        topSpan.style.transform = 'rotate(405deg)';
        topSpan.style.position = 'absolute';
        // Animate middle of burger
        middleSpan.style.transform = 'rotate(405deg)';
        middleSpan.style.position = 'absolute';
        // Animate bottom of burger
        bottomSpan.style.transform = 'rotate(315deg)';
        bottomSpan.style.position = 'absolute';
        // Drop down navbar extension
        mobileNavList.style.display = 'flex';
        $( "#navbar" ).animate({
            height: "50%",
            opacity: ".98"
          }, 200 );
        // Set burger as clicked
        hamburgerClicked = true;

        // CHANGE BACK BELOW CODE IF REMOVE JQUERY
        //navBar.style.height = '50%';
        //navBar.style.opacity = '.98';

    } else {

        // Animate top of burger
        topSpan.style.transform = 'rotate(-360deg)';
        topSpan.style.position = '';
        // Animate middle of burger
        middleSpan.style.transform = 'rotate(-360deg)';
        middleSpan.style.position = '';
        // Animate bottom of burger
        bottomSpan.style.transform = 'rotate(-360deg)';
        bottomSpan.style.position = '';
        // Close navbar extension
        mobileNavList.style.display = '';
        $( "#navbar" ).animate({
            height: "80px",
            opacity: ".95"
          }, 200 );
        // Set burger as 'not-clicked'
        hamburgerClicked = false;

        // CHANGE BACK BELOW CODE IF REMOVE JQUERY
        //navBar.style.opacity = '';
        //navBar.style.height = '';

    }

}

// onmousedown seems to work better than onpointerup for resizign response issue in mobile browsers
hamburger.onmousedown = (event) => {

    event.preventDefault();
    burgerSpin();

}

navZero.onpointerup = (event) => {

    event.preventDefault();
    // Style hamburger
    burgerSpin();
    // Navigate to section
    window.location.replace("#home");

}

navOne.onpointerup = (event) => {

    event.preventDefault();
    burgerSpin();
    window.location.replace("#sect1");

}

navTwo.onpointerup = (event) => {

    event.preventDefault();
    burgerSpin();
    window.location.replace("#sect2");

}

navThree.onpointerup = (event) => {

    event.preventDefault();
    burgerSpin();
    window.location.replace("#sect3");

}

navFour.onpointerup = (event) => {

    event.preventDefault();
    burgerSpin();
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

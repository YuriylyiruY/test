'use strict';
window.onload = () => {
const educationalList = document.querySelector('.educational-programms__list');
let selectedCard, swipeStartX;

const touchStart = function (e) {
    if (selectedCard) {
       this.classList.remove(selectedCard.class);
       this.style = `left: ${selectedCard.position}px`; 
    }
    swipeStartX = this.style.left ? e.changedTouches[0].clientX - (+this.style.left.replace('px', '')) : e.changedTouches[0].clientX;
}

const touchProgress = function (e) {
    const swipeProgressX = e.changedTouches[0].clientX;
    const leftOffset = swipeProgressX - swipeStartX;
    if (leftOffset <= 0 && leftOffset >= -596) {
        this.style = `left: ${leftOffset}px`;
    }
}

const touchEnd = function (e) {
    const endPoint = +this.style.left.replace('px', '');
    if (Math.abs(-303-endPoint) < 140) {
        this.classList.add('swipeBlock2');
        selectedCard = {
            class: 'swipeBlock2',
            position: -303
        }
    } else if (Math.abs(-596-endPoint) < 140) {
        this.classList.add('swipeBlock3');
        selectedCard = {
            class: 'swipeBlock3',
            position: -596
        }
    } else if (Math.abs(0-endPoint) < 140) {
        this.classList.add('swipeBlock1');
        selectedCard = {
            class: 'swipeBlock1',
            position: 0
        }
    }
}

educationalList.addEventListener('touchstart', touchStart);
educationalList.addEventListener('touchmove', touchProgress);
educationalList.addEventListener('touchend', touchEnd);
}
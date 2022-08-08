const slider = tns({
    container: "#slide-small-images-contents",
    // slideBy: "page",
    loop: false,
    swipeAngle: false,
    speed: 400,
    gutter: 5,
    prevButton: "#slide-small-prev-button",
    nextButton: "#slide-small-next-button",
    nav:false,
    responsive: {
        992: {
            items: 5
        },
        768: {
            items: 5,
        },
        576: {
            items: 4,
            mouseDrag: true,
            gutter: 8
        },
        0: {
            items: 4,
            mouseDrag: true,
            gutter: 8
        }
    }
});

const minQuantity = document.querySelector('#min-quantity');
const plusQuantity = document.querySelector('#plus-quantity');
const inputQuantity = document.querySelector('#quantity');

minQuantity.addEventListener('click', function(){
    let valNow = inputQuantity.value;
    if(valNow>1){
        valNow--;
        inputQuantity.value = valNow;
    }
});

plusQuantity.addEventListener('click', function(){
    let valNow = inputQuantity.value;
    valNow++;
    inputQuantity.value = valNow;
});


const slider_recommendation = tns({
    container: "#slide-cover-rec",
    slideBy: "page",
    loop: false,
    swipeAngle: false,
    speed: 400,
    gutter: 16,
    prevButton: "#prev-button-rec",
    nextButton: "#next-button-rec",
    nav:false,
    responsive: {
        992: {
            items: 5
        },
        768: {
            items: 4
        },
        576: {
            items: 3,
        },
        0: {
            items: 2,
            mouseDrag: true
        }
    }
});
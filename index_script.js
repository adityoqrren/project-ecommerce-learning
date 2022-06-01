var slideIndex = 1;
showSlide(slideIndex);

function nextSlide(n){
    showSlide(slideIndex += n)
}

function showSlide(n){
    var slides = document.getElementsByClassName("imgslide");
    
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

var slider = tns({
    container: "#slide-cover-1",
    slideBy: "page",
    loop: false,
    swipeAngle: false,
    speed: 400,
    gutter: 16,
    prevButton: "#prev-button-1",
    nextButton: "#next-button-1",
    nav:false,
    responsive: {
        992: {
            items: 4
        },
        768: {
            items: 3
        },
        576: {
            items: 2
        },
        0: {
            items: 2,
            mouseDrag: true,
            gutter: 8
        }
    }
});

var slider2 = tns({
    container: "#slide-cover-2",
    slideBy: "page",
    loop: false,
    swipeAngle: false,
    speed: 400,
    gutter: 16,
    prevButton: "#prev-button-2",
    nextButton: "#next-button-2",
    nav:false,
    responsive: {
        992: {
            items: 4
        },
        768: {
            items: 3
        },
        576: {
            items: 2
        },
        0: {
            items: 2,
            mouseDrag: true,
            gutter: 8
        }
    }
});


// Tab JS

tabButtons = document.querySelectorAll('.tab-button');
tabContents = document.querySelectorAll('.tab-contents-box');

tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', function handleClick(event){
       
        for (i=0; i<tabContents.length; i++){
             //kita sembunyikan semua tab-contents-box
            tabContents[i].classList.remove('active');
            //kita hapus dulu kelas active di semua tab-button
            tabButtons[i].classList.remove('active');  
        }
        //kita tambahin kelas active di button yang sekarang terklik
        event.target.classList.add('active');
        //kita tampilkan tab-content sesuai yang diminta 
        data = event.target.dataset.content;
        contentToOpen = document.querySelector('#tab-box-'+data);
        contentToOpen.classList.add("active");
    });
});

document.getElementById("defaultOpen").click();
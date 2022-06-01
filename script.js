//Styling nav-up saat scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    console.log("on scroll");
    navUp = document.querySelector('.nav-up');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        navUp.classList.add('on-scroll-padding-nav');
    }else{
        navUp.classList.remove('on-scroll-padding-nav');
    }
}

// Sidenav (minimize-mobile)
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('ul.nav-list');

menuToggle.addEventListener('click', function(){
    /* menambahkan atau menghilangkan class slide pada nav (nav ul) jika menuToggle (.menu-toggle input) diklik */
    nav.classList.add('slide');
});

// if(nav.classList.contains('slide')){
    document.addEventListener('click', function handleClickOutsideBox(event){
        // console.log('user clicked: ', event.target);
        
        
        if(event.target!=menuToggle && !nav.contains(event.target)){
            nav.classList.remove('slide');
        }
    
        
    });
// }

const exitButton = document.querySelector('.exit-side-menu span');
exitButton.addEventListener('click', function(){
    nav.classList.remove('slide');
});

const menuName1 = document.getElementById('menu-name-1');
const menuName2 = document.getElementById('menu-name-2');
const menuName3 = document.getElementById('menu-name-3');
const menuName4 = document.getElementById('menu-name-4');

menuName1.addEventListener('click', function(){menuClicked(1, menuName1)});
menuName2.addEventListener('click', function(){menuClicked(2, menuName2)});
menuName3.addEventListener('click', function(){menuClicked(3, menuName3)});
menuName4.addEventListener('click', function(){menuClicked(4, menuName4)});


function menuClicked(params, id){
    // console.log('#dropdown'+params);
    // console.log('id: ',id);
    const dropdownToShow = document.getElementById('dropdown'+params);

    id.querySelector('span').classList.toggle('rotateArrow');
    dropdownToShow.classList.toggle('dropdown-side-show')
}










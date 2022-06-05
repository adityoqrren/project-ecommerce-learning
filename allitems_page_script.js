// Tab JS

// tabButtons = document.querySelectorAll('.tab-button');
// tabContents = document.querySelectorAll('.tab-contents-box');

// tabButtons.forEach(tabButton => {
//     tabButton.addEventListener('click', function handleClick(event){
       
//         for (i=0; i<tabContents.length; i++){
//              //kita sembunyikan semua tab-contents-box
//             tabContents[i].classList.remove('active');
//             //kita hapus dulu kelas active di semua tab-button
//             tabButtons[i].classList.remove('active');  
//         }
//         //kita tambahin kelas active di button yang sekarang terklik
//         event.target.classList.add('active');
//         //kita tampilkan tab-content sesuai yang diminta 
//         data = event.target.dataset.content;
//         contentToOpen = document.querySelector('#tab-box-'+data);
//         contentToOpen.classList.add("active");
//     });
// });

// document.getElementById("defaultOpen").click();

// Left Filter Open-Close

allButtonsOpen = document.querySelectorAll('.btn-expand-collapse');
// allListFilter = document.querySelectorAll('.filter-left ul');

allButtonsOpen.forEach(buttonOpen => {
    buttonOpen.addEventListener('click', function handleClick(event){
        if(event.target.textContent=="+"){
            event.target.textContent = "-";
        }else{
            event.target.textContent = "+";
        }
        parentThisNode = event.target.parentElement.parentElement;
        console.log(parentThisNode);
        listThisNode = parentThisNode.querySelector("ul");
        listThisNode.classList.toggle('filter-hide');
    });
})

// open default left filter
document.getElementById("btn-expand-default").click();

// slide filter right (filter for minimize or mobile)
const filterRightButton = document.querySelector(".filter-button");
const filterRight = document.querySelector(".filter-right");
filterRightButton.addEventListener('click',function(){
    filterRight.classList.toggle('slide');
});

const filterClose = document.querySelector(".filter-close");
filterClose.addEventListener('click',function(){
    filterRight.classList.remove('slide');
});
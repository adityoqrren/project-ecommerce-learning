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
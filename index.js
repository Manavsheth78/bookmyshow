const signbtn = document.querySelector('.signin');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.cross');
const overlay = document.querySelector('.overlay');

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//open and close modal functions 
signbtn.addEventListener('click',openModal);
closebtn.addEventListener('click',closeModal);

//users press the escape key to close the modal
document.addEventListener('keydown',function(e){
    console.log( e.key);
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
    
});
//users click on the overlay to close the modal
overlay.addEventListener('click',closeModal);
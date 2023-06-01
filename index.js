const signbtn = document.querySelector('.signin');
const modal = document.querySelector('.modal');
const closebtn = document.querySelector('.cross');
const overlay = document.querySelector('.overlay');
const signupbtn = document.querySelector('.signup_btn');

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
    if(e.key === 'Escape'){
        if(!modal.classList.contains('hidden')){
            closeModal();
        }
    }
    
});
//users click on the overlay to close the modal
overlay.addEventListener('click',closeModal);


//sign in button functionality



const phone = document.querySelector('#phone');
   
phone.addEventListener('input',function(){
   
    var pat = "^[0-9]{10}$";
    var reg = new RegExp(pat);
    if(reg.test(phone.value)){
        phone.style.borderColor = 'green';
        signupbtn.classList.remove('hidden');
        signupbtn.classList.add('signup_active');
    }
    else{
        
        phone.style.borderColor = 'red';
        signupbtn.classList.remove('hidden');
        signupbtn.classList.remove('signup_active');



    }

});
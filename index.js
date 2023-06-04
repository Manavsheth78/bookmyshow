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



// sliderbtn

const leftbtn = document.querySelector('.slider__btn--left');
const rightbtn = document.querySelector('.slider__btn--right');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';




const goToSlide = function(slide){
    slides.forEach((s,i)=>{
        // console.log( i, slide);
        s.style.transform = `translateX(${100*(i-slide)}%)`;
    });
    
}

goToSlide(0);    //initial slide

let curSlide = 0;
let maxSlide = slides.length;

//next slide

const nextSlide = function(){
    if(curSlide===maxSlide-1)
    {
        curSlide=0;
    }
    else{

        curSlide++;
    }

    goToSlide(curSlide);
}

//Previous slide
const PreviousSlide = function(){
    if(curSlide===0)
    {
        curSlide=maxSlide-1;
    }
    else
    curSlide--;
    goToSlide(curSlide);
}


rightbtn.addEventListener('click',nextSlide);

leftbtn.addEventListener('click',PreviousSlide);


setInterval(nextSlide, 3000);



//*scrolling effect

    let swipeNo = 0;
const swipebtnright = document.querySelector('.swipe-btn-right');
const poster = swipebtnright.closest('.container').querySelectorAll('.movies');
    const container = document.querySelector('.container');


swipebtnright.addEventListener('click',function(e){
    swipeNo++;
    poster.forEach((p,i)=>{
        console.log( i, swipeNo);
        if(swipeNo==1){
            p.style.transform = `translateX(${-540*swipeNo}%)`;
                swipebtnright.classList.add('hidden');
                swipebtnleft.classList.remove('hidden');

        }
        else{
            swipebtnright.classList.remove('hidden');
        }
    
    });
    
});

//left btn 

const swipebtnleft = document.querySelector('.swipe-btn-left');

swipebtnleft.addEventListener('click',function(e){
    swipeNo--;
    poster.forEach((p,i)=>{
        console.log( i, swipeNo);
        if(swipeNo==0){
            p.style.transform = `translateX(${100*swipeNo}%)`;
            swipebtnleft.classList.add('hidden');
            swipebtnright.classList.remove('hidden');
        }
        else{
            swipebtnleft.classList.remove('hidden');
        }
    });

}); 









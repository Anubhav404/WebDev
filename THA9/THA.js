var value = document.querySelectorAll(".box");
var book = document.querySelector(".booked");
var avl = document.querySelector('.avl')
var booked = 0;
var available = 36;


// console.log(value.length);
for( let i = 0 ; i <= value.length ; i++){
    value[i].addEventListener('click' , function(){
        if(value[i].classList.contains('clicked')){
            
            value[i].classList.remove('clicked');
            available += 1;
			booked -= 1;
            

            
        }
        else{
            value[i].classList.add('clicked');
            booked += 1;
			available -= 1;
            
            // count++;
            // score.innerHTML =  count;
        }
        avl.innerText = available;
        book.innerText = booked;
    });
}

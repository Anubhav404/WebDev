// var select = document.querySelectorAll('.class')
// for( var i = 0;i <= select.length ;i++){
//     select[i].addEventListener('click' , function(){
//         if(select[i].classList.contains('clicked')){
//             select[i].classList.remove('clicked');
//         }
//         else{
//             select[i].classList.add('clicked');
//         }
//     });
// }

var selected = document.querySelectorAll(".class");
for (let i = 0; i < selected.length; i++) {
	selected[i].addEventListener("click", () => {
		if (selected[i].classList.contains("clicked")) {
			selected[i].classList.remove("clicked");
		} else {
			selected[i].classList.add("clicked");
		}
	});
}

var clear = document.querySelector(".clear");
clear.addEventListener('click' , function(){
   for(let j = 0 ; j<= selected.length ; j++){

   
    if (selected[j].classList.contains("clicked")) {
        selected[j].classList.remove("clicked");
    }
}
})
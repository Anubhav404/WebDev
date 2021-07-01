var input1 = document.querySelector(".input1")
var btn1 = document.querySelector(".button1")


var container = document.querySelector(".container")

btn1.addEventListener("click", function () {


    var create = document.createElement("li");
    create.innerHTML = input1.value;
    
    var addClass = container.appendChild(create).classList.add("listbox");
    

    classes = [];
    
    var child = container.children;
    classes.push(child)
    
    for (var i = 0; i <= child.length; i++) {

        child[i].addEventListener("dblclick", function () {
            create.classList.add("close");

            setInterval(() => {
                container.appendChild(create).style.display = "none";
            }, 600);


        })
        // console.log(child[0]);
    }

})



    // container.addEventListener("dblclick", function () {
    //     for (i = 0; i < close.length; i++) {
    //     container[i].appendChild(create).classList.add("close");
    //     }
    //     var close = document.getElementsByClassName("close");
    //     var i;
    //     for (i = 0; i < close.length; i++) {
    //         close[i].onclick = function () {
    //             var div = this.parentElement;
    //             close[i].style.display = "none";
    //         }
    //     }


    //     // setInterval(() => {
    //     //     container.appendChild(create).style.display = "none";
    //     // }, 600);

    // })




// console.log(addClass.length);


// btn2.addEventListener("click" , function(){

//     var create = document.createElement("div");
//     create.innerHTML = "<h2> Todays work is  </h2>" + i +  input2.value;

//     container.appendChild(create)
// })

// btn3.addEventListener("click" , function(){
//     var create = document.createElement("div");
//     create.innerHTML = "<h2> Work for tomorrow  </h2>" +  input3.value;

//     create.innerHTML = input3.value
//     container.appendChild(create)
// })


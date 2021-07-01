
    var next =  document.querySelector(".next")
    var next2 =  document.querySelector(".next2")
    var next3 =  document.querySelector(".next3")
    var next4 =  document.querySelector(".next4")


    var first = document.querySelector(".first-page")
    var second = document.querySelector(".second-page")
    var third = document.querySelector(".third-page")
    var fourth = document.querySelector(".fourth-page")




    function checkButton() {    
        if(document.getElementById('one').checked) {   
            document.addEventListener("dblclick" , () =>{
                document.style.background = "green"

            })
           
            
        }   
        else if(document.getElementById('two').checked) {   
            console.log("two checked");   
        }   
        else if(document.getElementById('three').checked) {   
           console.log("three checedk");
        }   
        else if(document.getElementById('four').checked) {   
           console.log("four checedk");    
        }  
        else {   
            
             console.log("You have not selected any season" ); 
        }   
    }   

    console.log(checkButton())

    // if(checked === true){
    //     console.log("true");
    // }
    // else{
    //     console.log("flase");
    // }


    
    next.addEventListener("click" , function(){
        first.style.display = "none"
        second.style.display = "unset"

    })

    next2.addEventListener("click" , function(){

        second.style.display = "none"
        third.style.display = "unset"

    })

    next3.addEventListener("click" , function(){

        third.style.display = "none"
        fourth.style.display = "unset"

    })


    

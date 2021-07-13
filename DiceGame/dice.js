var v1 = document.getElementById("play1");
var v2 = document.getElementById("play2");

function changeImage() {
    
    var img1 = document.getElementById("1stimg");
    var random1 = Math.floor(Math.random() * 6 + 1);
    var newAttrib = random1 + ".png";
    img1.setAttribute("src", newAttrib);
    v1.value = random1;

    // return random1;


}

function changeImage2() {
    var img2 = document.getElementById("2ndimg");
    var random2 = Math.floor(Math.random() * 6 + 1);
    var newAttrib = random2 + ".png";
    img2.setAttribute("src", newAttrib);
    v2.value = random2;

    // return random2;
}




function result() {
    
    

    if (v1.value > v2.value) {

        var doc = document.getElementById("winner");
        doc.innerHTML = " Player1 is the winner ";


    }
    else if(v1.value === v2.value){
        var doc3 = document.getElementById("winner");
        doc3.innerHTML = "Draw";
    }
    else {
        var doc2 = document.getElementById("winner");
        doc2.innerHTML = " Player2 is the winner";
    }

}






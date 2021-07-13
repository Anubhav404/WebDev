
var x = document.getElementById("math");
var y = document.getElementById("sci");
var z = document.getElementById("phy");
var a = document.getElementById("cs");
var b = document.getElementById("js");


function add(){
  var add = Number(x.value) + Number(y.value) + Number(z.value) + Number(a.value) + Number(b.value);
  var show = document.querySelector('h1').innerHTML = add;
}
function percent(){
  var add = Number(x.value) + Number(y.value) + Number(z.value) + Number(a.value) + Number(b.value);
  var percent = (add/500) *100 + "%" ;
  document.querySelector('h1').innerHTML = percent;
}
 

  

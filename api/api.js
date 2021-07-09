let btn = document.querySelector("#btn");
let input = document.querySelector("#ipbox");
let output = document.querySelector(".output");
let name = document.querySelector("#username");
let repo = document.querySelector("#repo");

btn.addEventListener('click', () => {
    fetch('https://api.github.com/users/' + input.value).then(response => response.json())
    .then(data => {

        // console.log(data);
        output.setAttribute("src" , data.avatar_url);
        username.innerHTML = data.login;

        fetch('https://api.github.com/users/'+input.value+'/repos').then(response => response.json())
        .then(data =>{
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].name);
                let newdiv = document.createElement("div");
                newdiv.className = "reponame";
                repo.appendChild(newdiv);
                
                newdiv.innerHTML = data[i].name;
                
            }
        })
    })
})  
let ul = document.querySelector("#todo-list");
let li = document.querySelector("li");
let inputValue = document.querySelector("input[type=text]");
let lis = document.querySelectorAll("li");
let icons = document.querySelectorAll(".deleteicon");
let plusButton = document.querySelector(".fa-plus");

// loop through list and apply event for todo cancellation
for(let i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("completed");
    })
}

//loop through list to delete done todos
for(let i=0; i<icons.length; i++){
    icons[i].addEventListener("click", function(){
        this.parentElement.remove();
    })
}

//add event listener to input
inputValue.addEventListener("keyup", function(event){
    if(event.key === "Enter") {
        let newLi = document.createElement("li");
        let text = document.createTextNode(inputValue.value);
        let span = document.createElement("span");
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-trash-alt");

        //append to form new lists 
        span.appendChild(icon);
        newLi.appendChild(text);
        newLi.appendChild(span);

        ul.appendChild(newLi);
        newLi.addEventListener("click", function(){
            this.classList.toggle("completed");
        })
        span.addEventListener("click", function(){
            this.parentElement.remove();
        })
        inputValue.value = "";
    }
    
})

plusButton.addEventListener("click", function(){
    if(true) {
        let newLi = document.createElement("li");
        let text = document.createTextNode(inputValue.value);
        let span = document.createElement("span");
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-trash-alt");

        //append to form new lists 
        span.appendChild(icon);
        newLi.appendChild(text);
        newLi.appendChild(span);

        ul.appendChild(newLi);
        newLi.addEventListener("click", function(){
            this.classList.toggle("completed");
        })
        span.addEventListener("click", function(){
            this.parentElement.remove();
        })
        inputValue.value = "";
    }
})

function updateTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();



    let currentTime = hours + ' : ' + minutes + ' : ' + seconds + " WAT ";
    
    let now = document.querySelector("#clock");
    now.innerHTML = currentTime;
    now.style.color= "#f11712";
    now.style.fontSize = "20px";
    setTimeout(updateTime, 500);
}

let i = 0;
const imageLinks = [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
     "https://images.unsplash.com/photo-1535357902142-d1baa8375bbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1508710285745-edc8137d6b5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
];

function change() {
   if(i >= imageLinks.length){
    i = 0;
  }
  document.getElementById('bg').style.backgroundImage = "url('"+ imageLinks[i++] + "')";
 
}  

setInterval(change, 5000);
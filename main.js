let ul = document.querySelector("#todo-list");
let li = document.querySelector("li");
let inputValue = document.querySelector("input[type=text]");
let lis = document.querySelectorAll("li");
let icons = document.querySelectorAll(".deleteicon");

for(let i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.classList.toggle("completed");
    })
}

for(let i=0; i<icons.length; i++){
    icons[i].addEventListener("click", function(){
        this.parentElement.remove();
    })
}

inputValue.addEventListener("keyup", function(event){
    if(event.key === "Enter") {
        let newLi = document.createElement("li");
        let text = document.createTextNode(inputValue.value);
        let span = document.createElement("span");
        let icon = document.createElement("i");
        icon.classList.add("fa", "fa-trash-alt");

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

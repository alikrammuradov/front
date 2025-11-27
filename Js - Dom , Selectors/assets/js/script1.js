// var title=document.querySelector("#head .title");
// title.classList.add("title-bgColor");


var add=document.querySelector(".add");

add.addEventListener("click",function(){
    var input=document.querySelectorAll(".text-data");

    var ul =document.querySelector(".data-list");

    var li=document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML=input.value;

    var icon =document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add("fa-trash");
    icon.style.marginLeft="100px";

    li.append(icon);

    ul.append(li);
    
    input.value="";
});

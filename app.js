const colors=document.querySelectorAll(".colors div");
const shoe=document.querySelector("img");
const submit=document.querySelector(".submit");

colors.forEach((item)=>{
    item.style.background = item.getAttribute("data-color");
    item.addEventListener("click" , (e) => {
        colors.forEach((itm) => {
    itm.style.border = "none";
     });
        e.target.style.border = "4px solid black";
        shoe.src = `images/${e.target.getAttribute("data-color")}.Jpg`;
        submit.style.background = e.target.getAttribute("data-color");
    });
});

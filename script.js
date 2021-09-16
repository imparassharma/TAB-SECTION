const about = document.querySelector(".tab-container");
const btns = document.querySelectorAll(".btn");
const text = document.querySelectorAll(".content");

about.addEventListener("click",function(e){
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });

        text.forEach(function(text){
            text.classList.remove("active");;
        });

        const element = document.getElementById(id);
        element.classList.add("active");

    }
  
});
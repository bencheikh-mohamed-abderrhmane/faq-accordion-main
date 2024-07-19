let buttons = document.querySelectorAll(".button");
let answers = document.querySelectorAll(".faq-answer");
for (var i = 0; i< buttons.length; i++) {
    buttons[i].addEventListener("click",function(){
        let button_clicked = Array.from(buttons).indexOf(this);
        answers[button_clicked].classList.toggle("hidden");
        if (this.value ==="+"){
            this.value = "-";
        }else{
            this.value = "+";
        }
    })
}
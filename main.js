



let main = document.querySelector(".main-box");

let item1 = document.querySelector('.item1');
let item2 = document.querySelector('.item2');
let item3 = document.querySelector('.item3');
let item4 = document.querySelector('.item4');

let modal1 = document.querySelector('.modal-container1');
let modal2 = document.querySelector('.modal-container2');
let modal3 = document.querySelector('.modal-container3');
let modal4 = document.querySelector('.modal-container4');

let btnModal1 = document.querySelector('.btn-modal1');
let btnModal2 = document.querySelector('.btn-modal2');
let btnModal3 = document.querySelector('.btn-modal3');
let btnModal4 = document.querySelector('.btn-modal4');


item1.onclick = function(){
    modal1.style.display = "block";
    console.log("teste")
}

btnModal1.onclick = function(){
    modal1.style.display = "none";
    modal1.style.display = ""
    
}

item2.onclick = function(){
    modal2.style.display = "block";
    console.log("teste")
}

btnModal2.onclick = function(){
    modal2.style.display = "none";
    
}

item3.onclick = function(){
    modal3.style.display = "block";
    console.log("teste")
}

btnModal3.onclick = function(){
    modal3.style.display = "none";
    
}

item4.onclick = function(){
    modal4.style.display = "block";
    console.log("teste")
}

btnModal4.onclick = function(){
    modal4.style.display = "none";
    
}

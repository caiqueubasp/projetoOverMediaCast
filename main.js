

let item1 = document.querySelector('#item1')
let modal1 = document.querySelector('.modal1')
let main = document.querySelector(".main-box")
let btnModal = document.querySelector('#btn-modal')

item1.onclick = function(){
    modal1.style.display = "block";
    main.style.background = "black";
    console.log("teste")
}

btnModal.onclick = function(){
    modal1.style.display = "none";
    main.style.background = "url('img/imagem-de-fundp.png')";
}
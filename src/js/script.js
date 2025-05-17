let imagens =[
    "src/assets/img/sushi-home1.jpg",
    "src/assets/img/sushi-home2.jpg",
    "src/assets/img/sushi-home3.jpg",
    "src/assets/img/sushi-home4.jpg"
];

//DECLARANDO AS VARIAVEIS

let index =0;
let tempo =3000;

//CRIANDO A FUNÇÃO DO SLIDESHOW

function slideShow(){

    document.getElementById('image').src =imagens[index];
    index++;
    //VERIFICAR QUANTIDADE DE IMAGENS
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
//EXECUTA A FUNÇÃO
slideShow();
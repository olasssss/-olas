function ChangeContent(input,selector)
{
    const title= document.querySelector(selector);
    title.innerHTML= input.value

}


const inputTitle= document.querySelector(".input-titulo")

const inputComentario= document.querySelector(".input-comentario")

const inputDe=document.querySelector(".input-De")

const inputpara=document.querySelector(".input-Para")


inputTitle.onkeyup = () => ChangeContent(inputTitle,".titulo")
inputComentario.onkeyup = () => ChangeContent(inputComentario,".mensaje")

function copyTexto()
{
const host=location.origin;
const fileName="segundacapa.html" 
const response=`${host}/-olas/${fileName}?title=${inputTitle.value}&content=${inputComentario.value}&De=${inputDe.value}&para=${inputpara.value} `

var win = window.open();
win.document.write(response);
alert (response)

}
const button=document.querySelector(".btn-copy")
button.onclick= () => copyTexto() 

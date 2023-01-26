function cambiaMensaje() {

document.getElementById("loading message").innerText = "Enviado!"


}
setTimeout(cambiaMensaje,3000)

    setTimeout(function (){
      const params= location.search.replace ("?","")

    let content= params.split("&")[0].replace("content=","")
  content= decodeURI(content)


    alert(content)


},4000)

function loadAudio(){

    var audio = new Audio("./musica.mp3");
    audio.play();
    

}

const encendido= document.querySelector(".encendido")
encendido.onclick=() => loadAudio()


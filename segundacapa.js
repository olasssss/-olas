function loadInfo() {
    const params= location.search.replace ("?","")
    const title= params.split("&")[0].replace("title=","")
    const content= params.split("&")[1].replace("content=","")
    const de= params.split("&")[2].replace("De=","")
    const para= params.split("&")[3].replace("para=","")

    console.log(title,content,de,para)

const don={
de:document.querySelector(".de"),
para:document.querySelector(".para"),
drive:document.querySelector(".drive"),


}
don.para.innerHTML="hey " +para
don.de.innerHTML= de+ " tiene algo para ti "
don.drive.href +="?content="+content 


}

loadInfo()

function loadAudio(){

    var audio = new Audio("./musica.mp3");
    audio.play();
    

}

const encendido= document.querySelector(".encendido")
encendido.onclick=() => loadAudio()

function loadInfo() {
    const params = decodeURI(location.search).replace("?", "");
    const title = params.split("&")[0].replace("Title=", "");
    const content = params.split("&")[1].replace("Content=", "");
    const de = params.split("&")[2].replace("De=", "");
    const para = params.split("&")[3].replace("Para=", "");

    console.log(title, content, de, para);

    const don = {
        de: document.querySelector(".de"),
        para: document.querySelector(".para"),
        drive: document.querySelector(".drive"),


    };
    don.para.innerHTML = "hey " + decodeURI(para);
    don.de.innerHTML = decodeURI(de) + " tiene algo para ti ";
    don.drive.href += "?Content=" + content;


}

loadInfo();

function loadAudio() {

    var audio = new Audio("./musica.mp3");
    audio.play();


}

const encendido = document.querySelector(".encendido");
encendido.onclick = () => loadAudio();

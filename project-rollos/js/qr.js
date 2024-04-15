//crea elemento
/*const video = document.createElement("video");

//nuestro camvas
const canvasElement = document.getElementById("qr-canvas");
const canvas = canvasElement.getContext("2d");

//div donde llegara nuestro canvas
const btnScanQR = document.getElementById("btn-scan-qr");

//lectura desactivada
let scanning = false;


//funcion para encender la camara
const encenderCamara = () => {
  navigator.mediaDevices
    .getUserMedia({ video: { facingMode: "environment" } })
    .then(function (stream) {
      scanning = true;
      btnScanQR.hidden = true;
      canvasElement.hidden = false;
      video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
      video.srcObject = stream;
      video.play();
      tick();
      scan();
    });
};

//funciones para levantar las funiones de encendido de la camara
function tick() {
  canvasElement.height = video.videoHeight;
  canvasElement.width = video.videoWidth;
  canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

  scanning && requestAnimationFrame(tick);
}

function scan() {
  try {
    qrcode.decode();
  } catch (e) {
    setTimeout(scan, 300);
  }
}

//apagara la camara
const cerrarCamara = () => {
  video.srcObject.getTracks().forEach((track) => {
    track.stop();
  });
  canvasElement.hidden = true;
  btnScanQR.hidden = false;
};

const activarSonido = () => {
  var audio = document.getElementById('audioScaner');
  audio.play();
}

//callback cuando termina de leer el codigo QR
qrcode.callback = (respuesta) => {
  if (respuesta) {
    //console.log(respuesta);
    Swal.fire(respuesta)
    activarSonido();
    //encenderCamara();    
    cerrarCamara();    

  }
};*/
const btnShowTable=document.getElementById('btn-excel');
const btnScanQR = document.getElementById("btn-scan-qr");
const html5Qrcode = new Html5Qrcode('reader');
        const qrCodeSuccessCallback = (decodedText, decodedResult)=>{
            if(decodedText){
                document.getElementById('show').style.display = 'block';
                document.getElementById('result').textContent = decodedText;
                html5Qrcode.stop();
                window.location.href='https://project-inventario.vercel.app/product-page.html?action=getInsumos&product='+decodedText;
                //window.location.href='http://localhost:5500/product-page.html?action=getInsumos&product='+decodedText;
            }
        }
        const config = {fps:10, qrbox:{width:250, height:250}}
        

const encenderCamara = () => {
    btnScanQR.hidden = true;
    html5Qrcode.start({facingMode:"environment"}, config,qrCodeSuccessCallback ); 
};

const encenderCamara2 = () => {
  console.log("HEEEEEEEEY")
  btnScanQR.hidden = true;
  html5Qrcode.start({facingMode:"environment"}, config,qrCodeSuccessCallback ); 
};

const cerrarCamara = () => {   
    html5Qrcode.stop();
    btnScanQR.hidden = false;
  };

btnShowTable.addEventListener('click',(e)=>{
    window.open('https://docs.google.com/spreadsheets/d/1w3Fwv90ujmzOewlWA-dy8oXrL1yiceNDgd5PjV2gKHA/edit#gid=0','blank');
  });
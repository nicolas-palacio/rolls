const QRscanner=document.getElementById("QR-scanner");
const btnAccept=document.getElementById('btn-accept');

const btnShowTable=document.getElementById('btn-excel');
const btnScanQR = document.getElementById("btn-scan-qr");
const html5Qrcode = new Html5Qrcode('reader');
        const qrCodeSuccessCallback = (decodedText, decodedResult)=>{
            if(decodedText){
                document.getElementById('show').style.display = 'block';
                document.getElementById('result').textContent = decodedText;
                html5Qrcode.stop();
                //window.location.href='https://project-inventario.vercel.app/product-page.html?action=getInsumos&product='+decodedText;
                window.location.href='http://localhost:5500/index.html?action=getInsumos&product='+decodedText;
            }
        }
        const config = {fps:10, qrbox:{width:250, height:250}}
        

const encenderCamara = () => {
    btnScanQR.hidden = true;
    html5Qrcode.start({facingMode:"environment"}, config,qrCodeSuccessCallback ); 
};

const encenderCamara2 = () => {
  btnScanQR.hidden = true;
  html5Qrcode.start({facingMode:"environment"}, config,qrCodeSuccessCallback ); 
};

const cerrarCamara = () => {   
    html5Qrcode.stop();
    btnScanQR.hidden = false;
  };

btnShowTable.addEventListener('click',(e)=>{
    window.open('https://docs.google.com/spreadsheets/d/16C-wko0W5AhoyE-jcPNAlJByNLdNNn6fkfzEOjOBxbo/edit#gid=0','blank');
  });

//encenderCamara2()
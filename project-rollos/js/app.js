const formCard=document.getElementById('form-card')
const QRscanner=document.getElementById("QR-scanner");

const btnScanQR = document.getElementById("btn-scan-qr");
const html5Qrcode = new Html5Qrcode('reader');

const btnShowTable=document.getElementById('btn-excel');
const productName=document.getElementById('product-name');
const rollsAmount=document.getElementById('rolls-amount');
const btnAccept=document.getElementById('btn-accept');
const btnHome=document.getElementById('btn-home');


const spinner=document.getElementById('spinner-card');

const queryString=window.location.search;
const urlParams= new URLSearchParams(queryString);
const API_URL='https://script.google.com/macros/s/AKfycbwozEbTCkDvZa9Xt8WwO4D3UjYa4CYV_IBmqcdgkxHWMOvfA1mA57d73Hu8RVAVLozj/exec'


btnShowTable.addEventListener('click',(e)=>{
  window.open('https://docs.google.com/spreadsheets/d/16C-wko0W5AhoyE-jcPNAlJByNLdNNn6fkfzEOjOBxbo/edit#gid=0','blank');
});

const getProduct=async ()=>{ 
    spinner.classList.remove("d-none");    
    rollsAmount.classList.add("d-none");

    await axios.get(API_URL+"?action=getRollo")
    .then((res)=>{
        console.log(res);
        spinner.classList.add("d-none");  
        rollsAmount.classList.remove("d-none");              
        rollsAmount.innerHTML='Rollos contados: '+res.data.amount;     
        
    }).catch((error=>{
        
        //return error;
    })) 
    
}

getProduct();

const scanRoll= async(product)=>{
  spinner.classList.remove("d-none");
  QRscanner.classList.add("hidden")
  await axios.post(API_URL+"?action=getRollo&product="+product[1])
  .then((res)=>{      
      if(JSON.stringify(res,null,2).includes(": 500,")){
        alert("Rollo ya escaneado");     
      }
      window.location='https://rolls-liard.vercel.app/';
      
  }).catch((error=>{
      
      //return error;
  }))

};


const qrCodeSuccessCallback = (decodedText, decodedResult)=>{
    if(decodedText){
         document.getElementById('show').style.display = 'block';
         document.getElementById('result').textContent = decodedText;
         html5Qrcode.stop();
         scanRoll(decodedText.split("&"));
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




btnAccept.addEventListener("click",(e)=>{
    window.location="https://rolls-liard.vercel.app/compare.html";
});

encenderCamara2();

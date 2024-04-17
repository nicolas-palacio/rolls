const spinner=document.getElementById('spinner-card');
const API_URL='https://script.google.com/macros/s/AKfycbyxWd0cVK0-W-fMpywkA2jS48cYDGz9sq1fRoNgP-ykilgqsfrJPyeHH_4wKAQYywiH/exec';

const rollsList=document.getElementById('rolls-list');
const btnHome=document.getElementById('btn-home');
const btnShowTable=document.getElementById('btn-excel');

btnShowTable.addEventListener('click',(e)=>{
    window.open('https://docs.google.com/spreadsheets/d/16C-wko0W5AhoyE-jcPNAlJByNLdNNn6fkfzEOjOBxbo/edit#gid=0','blank');
  });

  btnHome.addEventListener('click',(e)=>{
    window.location='https://rolls-liard.vercel.app/';
  });

const getProductsAbsent=async ()=>{ 
    spinner.classList.remove("d-none");    
    rollsList.classList.add("d-none");

    await axios.get(API_URL+"?action=compare")
    .then((res)=>{
        spinner.classList.add("d-none");  
        rollsList.classList.remove("d-none");                     
        res.data.forEach(actualObj => rollsList.innerHTML+=`<li class="list-group-item">${actualObj}</li>` );   
    }).catch((error=>{    
        //return error;
    })) 
    
}

getProductsAbsent();

function displayTime(){
    const dateTime = new Date();
    // console.log(dateTime);
    const hours= dateTime.getHours();
    const minutes = dateTime.getMinutes();
    const seconds =dateTime.getSeconds();
    const session = document.getElementById('session');
    if(hours >=12){
        session.innerHTML= 'PM';
    }
    else{
        session.innerHTML="am"
    }
   
     document.getElementById('hours').innerHTML=hours
    
     document.getElementById('minutes').innerHTML=minutes
     
    document.getElementById('seconds').innerHTML=seconds;



}
setInterval(displayTime,10)
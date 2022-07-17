function updateTime(){
    var dateTime = new Date();
    var hr = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var ampm = document.getElementById("am_pm");
        
    if(hr>12){
        ampm.innerHTML = "PM";
        }  else{
            ampm.innerHTML="AM";
        }
        
        if(hr>12){
            hr=hr-12;
        } 
        if(hr<10){
            hr = "0" + hr;
        }
        if(min<10){
            min = "0" + min;
        }
        if(sec<10){
            sec = "0" + sec;
        }

    document.getElementById("hour").innerHTML = hr;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;   
}
setInterval(updateTime, 1000);
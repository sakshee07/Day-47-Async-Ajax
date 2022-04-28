function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs" + date.getMinutes() + 
    "min"+date.getSeconds()+"sec";
}

function showSessionExpire(){
    console.log("Activity-b :your session exprired at "+showTime())
} 
console.log("Activity-A trigrring activity-B at"+showTime());
setTimeout(showSessionExpire,5000);

console.log("Activity-A:Triggered Activity-B at "
+showTime()+"will exicute after 5seconds");
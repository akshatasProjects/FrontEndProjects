
function updateClock(){
    // To update the clock in 12 hrs and add AM PM chnaging from const to let

    const timeNow = new Date();
    let hours = timeNow.getHours();
    const merdiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = timeNow.getMinutes().toString().padStart(2,0);
    const seconds = timeNow.getSeconds().toString().padStart(2,0);

    const timeString = `${hours}: ${minutes} : ${seconds} ${merdiem}`;
    document.getElementById('clock').textContent = timeString;
}

updateClock();
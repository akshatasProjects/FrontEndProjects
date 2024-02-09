
const myBoxId = document.getElementById('myBox');
const moveAmount = 100; //100px
let x = 0;
let y = 0;

document.addEventListener('keydown', (event)=>{
    myBoxId.textContent = "😮";
    myBoxId.style.backgroundColor = 'tomato';
});

document.addEventListener('keyup', (event)=>{
    myBoxId.textContent = "😁";
    myBoxId.style.backgroundColor = 'lightBlue';
})

document.addEventListener('keydown', (event)=>{
  if(event.key.startsWith("Arrow")){
    event.preventDefault();
    // console.log(event.key.startsWith("Arrow"))
    switch(event.key){
        case "ArrowUp":
            y -= moveAmount;
            break;
        case "ArrowDown":
            y += moveAmount;
            break;
        case "ArrowLeft":
            x -= moveAmount;
            break;
        case "ArrowRight":
            x += moveAmount;
            break;
    }
    myBoxId.style.top = `${y}px`;
    myBoxId.style.left = `${x}px`;
  }
})









/* 

 */



const myBox = document.getElementById('myBox');
const myBtn = document.getElementById('myBtn');

myBtn.addEventListener('click', function(event){
    // console.log(event);
    myBox.style.backgroundColor = 'lightgreen';
    myBox.style.borderRadius = '50%';
    myBox.textContent = "OUCH 🤔";
})

myBtn.addEventListener('mouseover', (event)=>{
    myBox.style.backgroundColor = 'yellow';
    myBox.textContent ="Don't Do it 🤢"
})

myBtn.addEventListener('mouseout', (event)=>{
    myBox.style.backgroundColor = 'lightgray';
    myBox.textContent = 'Click Me 😂'
})
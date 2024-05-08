let settingsMenu = document.querySelector('.settings-menu')
let darkBtn = document.getElementById('dark-btn')

function settingsMenuToggle(){
  settingsMenu.classList.toggle('settings-menu-height')
}


darkBtn.onclick = function(){
  darkBtn.classList.toggle("dark-btn-on");
  document.body.classList.toggle('dark-theme');

  // updating the local storage to toggle between dark and light 
  // so that it holds selected theme even after closing it
  if(localStorage.getItem('theme') == 'light'){
    localStorage.setItem('theme', 'dark');
  } else{
    localStorage.setItem('theme', 'light');
  }

}

//--------------------------------- localstorage -------------------------

if(localStorage.getItem('theme') == 'light'){
  darkBtn.classList.remove("dark-btn-on");
  document.body.classList.remove('dark-theme');
} else if(localStorage.getItem('theme') == 'dark'){
  darkBtn.classList.add("dark-btn-on");
  document.body.classList.add('dark-theme');
} else{
  // default value
  localStorage.setItem('theme', 'light')
}

// localStorage.setItem('theme', 'dark');
// localStorage.getItem('theme')
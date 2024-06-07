let profileMenu = document.getElementById("profile-menu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

let sideBarActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("show-more-link");

function toggleLink() {
  sideBarActivity.classList.toggle("open-activity");

  if (sideBarActivity.classList.contains("open-activity")) {
    moreLink.innerHTML = `Show Less <b>-</b> `;
  } else {
    moreLink.innerHTML = `Show More <b>+</b> `;
  }
}

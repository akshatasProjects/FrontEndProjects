const testimonials = [
  {
    name: "Lisa",
    photoURL:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I have been a loyal customer of Apple for many years now, and I can confidently say that their products have never failed to impress me.",
  },
  {
    name: "Daniel",
    photoURL:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "I had the pleasure of using the software developed by David and I must say, it exceeded all my expectations. The user interface was extremely user-friendly and intuitive, making it easy for me to navigate through the various features. ",
  },
  {
    name: "Samantha",
    photoURL:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXNlcnxlbnwwfDB8MHx8fDA%3D",
    text: "The software was also very efficient and helped me streamline my work process, saving me a lot of time and effort. David's attention to detail and dedication to creating a top-notch product is evident in every aspect of the software.",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const userNameEl = document.querySelector(".username");

let index = 0;
updateTestimonials();

function updateTestimonials() {
  const { name, photoURL, text } = testimonials[index];
  userNameEl.innerText = name;
  imgEl.src = photoURL;
  textEl.innerText = text;

  index++;
  if (index === testimonials.length) {
    index = 0;
  }
  setTimeout(() => {
    updateTestimonials();
  }, 2000);
}

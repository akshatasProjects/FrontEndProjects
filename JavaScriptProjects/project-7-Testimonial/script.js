const testimonials = [
  {
    author: {
      name: "Gabriel Moore",
      image: "author-01.jpg",
    },
    text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    date: "23rd May",
  },

  {
    author: {
      name: "Billy Bailey",
      image: "author-02.jpg",
    },
    text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    date: "25th May",
  },
  {
    author: {
      name: "Jackie Oliver",
      image: "author-03.jpg",
    },
    text: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    date: "2nd June",
  },
];

const containerEle = document.getElementById("testimonial-container");
// creating a card
const makeTestCard = (testimonial) => {
  return `<div class="test-card">
        <img src="${testimonial.author.image}">
        <h2>${testimonial.author.name}</h2>
        <p>${testimonial.text}</p>
        <date>Written on ${testimonial.date}</date>
    
    </div>`;
};

let currTestimonial = 0;

const nextTestimonial = () => {
  if (currTestimonial < testimonials.length - 1) {
    currTestimonial = currTestimonial + 1;
    updatePage();
  }
};
const prevTestimonial = () => {
  if (currTestimonial > 0) {
    currTestimonial = currTestimonial - 1;
    updatePage();
  }
};

const updatePage = () => {
  let markup = makeTestCard(testimonials[currTestimonial]);

  // nav button should show if more than 1 card is there
  if (testimonials.length > 1) {
    markup += `<nav>
      <button onclick="prevTestimonial()">Previous</button>
      <button onclick="nextTestimonial()">Next</button>
    </nav>`;
  }
  containerEle.innerHTML = markup;
};

updatePage();

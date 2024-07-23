const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const api = "8626d3edc335856d21be858c620505cf54ee0303";
const URL_API = `https://emoji-api.com/emojis?access_key=${api}`;
const emoji = [];

async function getEmoji() {
  // let response = await fetch(
  //   "https://emoji-api.com/emojis?access_key=8626d3edc335856d21be858c620505cf54ee0303"
  // );

  let response = await fetch(URL_API);
  data = await response.json();
  // console.log(data);
  // to iterate over the  emoji array(data )
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCharacter: data[i].unicodeName,
    });
  }
}

getEmoji();

btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCharacter;
});

// let user = prompt('Qaysi tilga tarjima qilmoqchisiz?');
async function translateText() {
  let tanlanganTil = document.getElementById('language').value;
  let text = document.getElementById('inputText').value;
  let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=uz|${tanlanganTil}`;

  let response = await fetch(url);
  let data = await response.json();
  document.getElementById('result').innerText =
    data.responseData.translatedText;
}
function ClearText() {
  document.getElementById('inputText').value = '';
  document.getElementById('result').innerHTML = '';
}
function copyResult() {
  let text = document.getElementById('result').innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert('Matn nusxalandi! 📋');
  });
}
function playMusic() {
  let music = document.getElementById('myMusic');
  music.play();
}
function pauseMusic() {
  let pauseMusic = document.getElementById('myMusic');
  pauseMusic.pause();
}
function Family() {
  let user = prompt('Agar bu ijodkorni tanisangiz uning yilini kiriting...');
  let familys = document.getElementById('family');
  let PlayMusic = document.getElementById('PlayMusic');
  let PauseeMusic = document.getElementById('PauseMusic');
  if (user == 2010) {
    PlayMusic.style.display = 'flex';
    PauseeMusic.style.display = 'flex';
    alert('Barakalla topdingiz✅');
    document.body.style.backgroundImage =
      "url('https://static.vecteezy.com/system/resources/thumbnails/035/957/825/small/empty-space-studio-dark-room-with-blue-lighting-effect-and-fog-in-black-background-photo.jpg')";
  } else {
    alert('Siz ijodkorning yaqini emasiz!❌');
  }
}

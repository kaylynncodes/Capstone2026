async function translateText(text, targetLang) {
  const response = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: targetLang,
      format: "text"
    })
  });

  const data = await response.json();
  return data.translatedText;
}


// 🌍 Translate entire page
async function translatePage(lang){

const elements = document.querySelectorAll("[data-translate]");

for(const el of elements){

const original = el.getAttribute("data-original") || el.innerText;

el.setAttribute("data-original", original);

const translated = await translateText(original, lang);

el.innerText = translated;

}

}

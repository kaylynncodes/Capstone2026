const LANG = {
  title: {
    en: "Learn English Without Losing Your Language",
    es: "Aprende inglés sin perder tu idioma"
  }
};

function setLanguage(lang){
  localStorage.setItem("lang", lang);
  updateUI();
}

function updateUI(){
  const lang = localStorage.getItem("lang") || "en";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if(LANG[key]){
      el.innerText = LANG[key][lang];
    }
  });
}

// 👇 PUT IT HERE (VERY BOTTOM)
document.addEventListener("DOMContentLoaded", updateUI);

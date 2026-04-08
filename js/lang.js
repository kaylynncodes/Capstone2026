const LANG = {

  title: {
    en: "Learn English Without Losing Your Language",
    es: "Aprende inglés sin perder tu idioma",
    pt: "Aprenda inglês sem perder sua língua",
    zh: "在不失去母语的情况下学习英语",
    fr: "Apprenez l'anglais sans perdre votre langue",
    de: "Lerne Englisch ohne deine Sprache zu verlieren",
    ar: "تعلم الإنجليزية دون فقدان لغتك",
    hi: "अपनी भाषा खोए बिना अंग्रेजी सीखें",
    ja: "母国語を失わずに英語を学ぶ",
    ko: "모국어를 잃지 않고 영어 배우기",
    ru: "Изучайте английский, не теряя родной язык"
  },

  games: {
    en: "Study Games",
    es: "Juegos de estudio",
    pt: "Jogos de estudo",
    zh: "学习游戏",
    fr: "Jeux d'étude",
    de: "Lernspiele",
    ar: "ألعاب تعليمية",
    hi: "अध्ययन खेल",
    ja: "学習ゲーム",
    ko: "학습 게임",
    ru: "Обучающие игры"
  },

  chat: {
    en: "Language Chat",
    es: "Chat de Idiomas",
    pt: "Chat de Idiomas",
    zh: "语言聊天",
    fr: "Chat Linguistique",
    de: "Sprach-Chat",
    ar: "دردشة اللغات",
    hi: "भाषा चैट",
    ja: "言語チャット",
    ko: "언어 채팅",
    ru: "Языковой чат"
  },

  login: {
    en: "Login",
    es: "Iniciar sesión",
    pt: "Entrar",
    zh: "登录",
    fr: "Connexion",
    de: "Anmelden",
    ar: "تسجيل الدخول",
    hi: "लॉगिन",
    ja: "ログイン",
    ko: "로그인",
    ru: "Вход"
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

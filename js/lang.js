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
subtitle: {
  en:"A global space to learn, connect, and grow across languages",
  es:"Un espacio global para aprender, conectar y crecer entre idiomas",
  pt:"Um espaço global para aprender, conectar e crescer entre idiomas",
  zh:"一个跨语言学习、连接和成长的全球空间",
  fr:"Un espace mondial pour apprendre, se connecter et grandir entre les langues",
  de:"Ein globaler Raum zum Lernen, Verbinden und Wachsen über Sprachen hinweg",
  ar:"مساحة عالمية للتعلم والتواصل والنمو عبر اللغات",
  hi:"भाषाओं के पार सीखने, जुड़ने और बढ़ने का एक वैश्विक स्थान",
  ja:"言語を越えて学び、つながり、成長するためのグローバルな空間",
  ko:"언어를 넘어 배우고 연결되고 성장하는 글로벌 공간",
  ru:"Глобальное пространство для обучения, общения и развития на разных языках"
},

languages_list: {
  en:"English, Español, Português, 中文, Français, Deutsch, العربية, हिन्दी, 日本語, 한국어, Русский"
},

f1:{en:"Practice vocabulary games"},
f2:{en:"Chat with learners around the world"},
f3:{en:"Read multilingual student stories"},
f4:{en:"Access teacher lesson plans"},

p1:{en:"English speaker learning Spanish"},
p2:{en:"Spanish speaker learning English"},
p3:{en:"Russian speaker learning Portuguese"},
  
  home: { en:"Home", es:"Inicio", pt:"Início", zh:"首页", fr:"Accueil", de:"Startseite", ar:"الرئيسية", hi:"मुखपृष्ठ", ja:"ホーム", ko:"홈", ru:"Главная" },

  games: { en:"Study Games", es:"Juegos de estudio", pt:"Jogos de estudo", zh:"学习游戏", fr:"Jeux d'étude", de:"Lernspiele", ar:"ألعاب تعليمية", hi:"अध्ययन खेल", ja:"学習ゲーム", ko:"학습 게임", ru:"Обучающие игры" },

  chat: { en:"Language Chat", es:"Chat de Idiomas", pt:"Chat de Idiomas", zh:"语言聊天", fr:"Chat Linguistique", de:"Sprach-Chat", ar:"دردشة اللغات", hi:"भाषा चैट", ja:"言語チャット", ko:"언어 채팅", ru:"Языковой чат" },

  students: { en:"Student Stories", es:"Historias de Estudiantes", pt:"Histórias de Estudantes", zh:"学生故事", fr:"Histoires d'Étudiants", de:"Studentengeschichten", ar:"قصص الطلاب", hi:"छात्र कहानियाँ", ja:"学生の物語", ko:"학생 이야기", ru:"Истории студентов" },

  teachers: { en:"Teacher Resources", es:"Recursos para Profesores", pt:"Recursos para Professores", zh:"教师资源", fr:"Ressources pour Enseignants", de:"Lehrmaterialien", ar:"موارد المعلمين", hi:"शिक्षक संसाधन", ja:"教師向け資料", ko:"교사용 자료", ru:"Ресурсы для учителей" },

  login: { en:"Login", es:"Iniciar sesión", pt:"Entrar", zh:"登录", fr:"Connexion", de:"Anmelden", ar:"تسجيل الدخول", hi:"लॉगिन", ja:"ログイン", ko:"로그인", ru:"Вход" },

  languages: { en:"Languages Supported", es:"Idiomas Soportados", pt:"Idiomas Suportados", zh:"支持的语言", fr:"Langues prises en charge", de:"Unterstützte Sprachen", ar:"اللغات المدعومة", hi:"समर्थित भाषाएँ", ja:"対応言語", ko:"지원 언어", ru:"Поддерживаемые языки" },

  features: { en:"What You Can Do Here", es:"Lo que puedes hacer aquí", pt:"O que você pode fazer aqui", zh:"你可以在这里做什么", fr:"Ce que vous pouvez faire ici", de:"Was Sie hier tun können", ar:"ما يمكنك القيام به هنا", hi:"आप यहाँ क्या कर सकते हैं", ja:"ここでできること", ko:"여기서 할 수 있는 것", ru:"Что вы можете делать здесь" },

  paths: { en:"Learning Paths", es:"Rutas de aprendizaje", pt:"Caminhos de aprendizagem", zh:"学习路径", fr:"Parcours d'apprentissage", de:"Lernpfade", ar:"مسارات التعلم", hi:"सीखने के मार्ग", ja:"学習パス", ko:"학습 경로", ru:"Учебные пути" }

};

function setLanguage(lang){
  localStorage.setItem("lang", lang);
  updateUI();
  syncDropdown();
}

function updateUI(){
  const lang = localStorage.getItem("lang") || "en";

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");

    if(LANG[key] && LANG[key][lang]){
      el.innerText = LANG[key][lang];
    } else if(LANG[key]){
      el.innerText = LANG[key]["en"];
    }
  });
}

function syncDropdown(){
  const lang = localStorage.getItem("lang") || "en";
  const dropdown = document.getElementById("language");
  if(dropdown){
    dropdown.value = lang;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  syncDropdown();
});

document.addEventListener("DOMContentLoaded", () => {

  const navbar = `
  
  <header class="navbar">

    <div class="logo">🌍 LinguaWorld</div>

    <nav class="nav-links">
      <a href="index.html" data-key="home"></a>
      <a href="games.html" data-key="games"></a>
      <a href="chat.html" data-key="chat"></a>
      <a href="students.html" data-key="students"></a>
      <a href="teachers.html" data-key="teachers"></a>
      <a href="login.html" data-key="login"></a>
    </nav>

    <div class="language-selector">
      <select onchange="setLanguage(this.value)">
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="pt">Português</option>
          <option value="zh">中文</option>
          <option value="fr">Français</option>
          <option value="de">Deutsch</option>
          <option value="ar">العربية</option>
          <option value="hi">हिन्दी</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
        <option value="ru">Русский</option>

      </select>

    </div>

  </header>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbar);

  // attach translation event
  document.getElementById("language").addEventListener("change", function () {
    translatePage(this.value);
  });

});


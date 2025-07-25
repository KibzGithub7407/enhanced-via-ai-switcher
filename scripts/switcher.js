const query = new URLSearchParams(window.location.search).get('q') || prompt("Enter your search term:");
const encoded = encodeURIComponent(query);

const categories = [
  {
    title: "🌐 General Purpose Search Engines",
    engines: [
      { name: "🔎 Google", url: `https://www.google.com/search?q=${encoded}` },
      { name: "🌍 Bing", url: `https://www.bing.com/search?q=${encoded}` },
      { name: "📩 Yahoo!", url: `https://search.yahoo.com/search?p=${encoded}` },
      { name: "🌱 Ecosia", url: `https://www.ecosia.org/search?q=${encoded}` },
      { name: "🔍 AOL", url: `https://search.aol.com/aol/search?q=${encoded}` },
      { name: "❓ Ask.com", url: `https://www.ask.com/web?q=${encoded}` }
    ]
  },
  {
    title: "🔒 Privacy-Focused Search Engines",
    engines: [
      { name: "🕵️ DuckDuckGo", url: `https://duckduckgo.com/?q=${encoded}` },
      { name: "🚫 Swisscows", url: `https://swisscows.com/web?query=${encoded}` },
      { name: "🛡️ Mojeek", url: `https://www.mojeek.com/search?q=${encoded}` },
      { name: "👻 Startpage", url: `https://www.startpage.com/do/dsearch?query=${encoded}` }
    ]
  },
  {
    title: "🤖 AI-Powered Assistants",
    engines: [
      { name: "💬 ChatGPT", url: `https://chat.openai.com/?q=${encoded}` },
      { name: "🔮 Gemini", url: `https://gemini.google.com/app?q=${encoded}` },
      { name: "🧠 Claude AI", url: `https://claude.ai/chat?q=${encoded}` },
      { name: "🤔 Perplexity AI", url: `https://www.perplexity.ai/search?q=${encoded}` },
      { name: "🔗 You.com", url: `https://you.com/search?q=${encoded}` }
    ]
  },
  {
    title: "🌏 Regional Search Engines",
    engines: [
      { name: "🇨🇳 Baidu (China)", url: `https://www.baidu.com/s?wd=${encoded}` },
      { name: "🇷🇺 Yandex (Russia)", url: `https://yandex.com/search/?text=${encoded}` },
      { name: "🇰🇷 Naver (Korea)", url: `https://search.naver.com/search.naver?query=${encoded}` }
    ]
  },
  {
    title: "🧓 Legacy / Specialized",
    engines: [
      { name: "📘 Internet Archive", url: `https://archive.org/search.php?query=${encoded}` },
      { name: "📚 Google Scholar", url: `https://scholar.google.com/scholar?q=${encoded}` },
      { name: "🔬 WolframAlpha", url: `https://www.wolframalpha.com/input/?i=${encoded}` }
    ]
  }
];

// Render categories and buttons
const container = document.getElementById("switcher-panel");
categories.forEach(category => {
  const section = document.createElement("div");
  section.className = "category";

  const heading = document.createElement("h3");
  heading.textContent = category.title;
  section.appendChild(heading);

  category.engines.forEach(engine => {
    const btn = document.createElement("a");
    btn.href = engine.url;
    btn.textContent = engine.name;
    btn.className = "engine-button";
    btn.target = "_blank";
    section.appendChild(btn);
  });

  container.appendChild(section);
});

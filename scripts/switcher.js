const query = new URLSearchParams(window.location.search).get('q') || prompt("Enter your search term:");
const encoded = encodeURIComponent(query);

const categories = [
  {
    title: "AI Tools",
    engines: [
      { name: "💬 ChatGPT", url: `https://chat.openai.com/?q=${encoded}` },
      { name: "🤖 Perplexity", url: `https://www.perplexity.ai/search?q=${encoded}` },
      { name: "🌐 Bing AI", url: `https://www.bing.com/search?q=${encoded}` },
      { name: "🧠 Claude", url: `https://claude.ai/chat?q=${encoded}` },
      { name: "🔮 Gemini", url: `https://gemini.google.com/app?q=${encoded}` }
    ]
  },
  {
    title: "General-Purpose Search Engines",
    engines: [
      { name: "🔎 Google", url: `https://www.google.com/search?q=${encoded}` },
      { name: "🌐 Bing", url: `https://www.bing.com/search?q=${encoded}` },
      { name: "🟣 Yahoo!", url: `https://search.yahoo.com/search?p=${encoded}` },
      { name: "🟠 Yandex", url: `https://yandex.com/search/?text=${encoded}` },
      { name: "🔵 Baidu", url: `https://www.baidu.com/s?wd=${encoded}` },
      { name: "🦆 DuckDuckGo", url: `https://duckduckgo.com/?q=${encoded}` },
      { name: "🌱 Ecosia", url: `https://www.ecosia.org/search?q=${encoded}` },
      { name: "🟢 AOL Search", url: `https://search.aol.com/aol/search?q=${encoded}` },
      { name: "❓ Ask.com", url: `https://www.ask.com/web?q=${encoded}` },
      { name: "🇰🇷 Naver", url: `https://search.naver.com/search.naver?query=${encoded}` }
    ]
  },
  {
    title: "Privacy-Focused Search Engines",
    engines: [
      { name: "🦆 DuckDuckGo", url: `https://duckduckgo.com/?q=${encoded}` },
      { name: "🛡️ Startpage", url: `https://www.startpage.com/sp/search?query=${encoded}` },
      { name: "🔒 Qwant", url: `https://www.qwant.com/?q=${encoded}` },
      { name: "🦁 Brave Search", url: `https://search.brave.com/search?q=${encoded}` },
      { name: "🌲 Mojeek", url: `https://www.mojeek.com/search?q=${encoded}` }
    ]
  }
];

const container = document.getElementById("switcher-panel");
categories.forEach(cat => {
  const section = document.createElement("div");
  section.className = "category-section";
  const heading = document.createElement("h2");
  heading.textContent = cat.title;
  section.appendChild(heading);

  cat.engines.forEach(engine => {
    const btn = document.createElement("a");
    btn.href = engine.url;
    btn.textContent = engine.name;
    btn.className = "engine-button";
    btn.target = "_blank";
    section.appendChild(btn);
  });

  container.appendChild(section);
});

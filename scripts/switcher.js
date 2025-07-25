const query = new URLSearchParams(window.location.search).get('q') || prompt("Enter your search term:");
const encoded = encodeURIComponent(query);

const engines = [
  { name: "🔎 Google", url: `https://www.google.com/search?q=${encoded}` },
  { name: "💬 ChatGPT", url: `https://chat.openai.com/?q=${encoded}` },
  { name: "🤖 Perplexity", url: `https://www.perplexity.ai/search?q=${encoded}` },
  { name: "🌐 Bing AI", url: `https://www.bing.com/search?q=${encoded}` },
  { name: "🧠 Claude", url: `https://claude.ai/chat?q=${encoded}` },
  { name: "🔮 Gemini", url: `https://gemini.google.com/app?q=${encoded}` }
];

const container = document.getElementById("switcher-panel");
engines.forEach(engine => {
  const btn = document.createElement("a");
  btn.href = engine.url;
  btn.textContent = engine.name;
  btn.className = "engine-button";
  btn.target = "_blank";
  container.appendChild(btn);
});

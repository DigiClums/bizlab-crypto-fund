const fs = require("fs");
const path = require("path");

const structure = {
  "bizlab-crypto-fund": {
    "pages": {
      "index.js": "// Landing Page\nexport default function Home() { return <h1>BizLab Crypto Fund</h1>; }",
      "about.js": "// About Page\nexport default function About() { return <h1>About BizLab</h1>; }"
    },
    "components": {
      "Navbar.js": "// Navbar Component\nexport default function Navbar() { return <nav>Navbar</nav>; }",
      "Hero.js": "// Hero Component\nexport default function Hero() { return <section>Hero</section>; }",
      "Wallet.js": "// Wallet Component\nexport default function Wallet() { return <section>Wallet</section>; }",
      "Ledger.js": "// Ledger Component\nexport default function Ledger() { return <section>Ledger</section>; }",
      "Footer.js": "// Footer Component\nexport default function Footer() { return <footer>Footer</footer>; }"
    },
    "public": {
      "logo.png": "" // آپ بعد میں یہاں image رکھ سکتے ہیں
    },
    "styles": {
      "globals.css": "/* Global styles */\nbody { font-family: sans-serif; }"
    },
    "package.json": `{
  "name": "bizlab-crypto-fund",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  }
}`
  }
};

function createStructure(basePath, obj) {
  for (const name in obj) {
    const filePath = path.join(basePath, name);
    if (typeof obj[name] === "string") {
      fs.writeFileSync(filePath, obj[name], "utf8");
    } else {
      fs.mkdirSync(filePath, { recursive: true });
      createStructure(filePath, obj[name]);
    }
  }
}

createStructure(".", structure);
console.log("✅ Project structure created successfully!");

import CodeBlock from "../components/CodeBlock";

const Readme = ({ openFile }) => {
  const markdown = `# 👋 Hi, I'm Krizia Bianca

## Front-End & WordPress Developer
## Crafting responsive, user-focused websites with performance and simplicity in mind.

---

### ☕ About Me

- 🧩 Freelancer at **Koffee Bytes Digital**  
- 🌏 Based in the **Philippines**  
- 💡 Passionate about **web performance** and **clean design**  
- ✨ Believes in **“Less clutter, more clarity.”**  
- 📚 Always learning new tools to improve workflow  

> *“I build websites that don’t just look good — they feel effortless.”*

---

### 🧰 Tech Stack
| Category | Tools & Technologies |
|:----------|:---------------------|
| **Languages** | HTML, CSS, JavaScript, PHP |
| **WordPress** | Custom Themes, Plugin Integration, ACF, Gutenberg |
| **Frameworks** | React.js, Bootstrap, Tailwind CSS |
| **Page Builders** | Elementor, Divi |
| **Tools** | Git, VS Code, Figma, Adobe XD |

---

### 💼 Featured Projects

- 🗺️ [**Airport Codes PH**](https://github.com/kbafadriquela/airport-codes-ph)  
- 🎨 [**Mint – One Page Portfolio Theme**](https://github.com/kbafadriquela/mint-minimal-portfolio)  
- 🖥️ [**Portfolio UI – WordPress Theme**](https://github.com/kbafadriquela/portfolio-ui)

---

### 🚀 Currently Focusing On
Exploring **React.js** and improving **site performance and UX**.

---

### 💬 Quotes That Inspire Me
> *“Simplicity is the ultimate sophistication.”* — Leonardo da Vinci  
> *“Design is not just what it looks like and feels like. Design is how it works.”* — Steve Jobs  

---

### 📫 Connect with Me
<p align="center">
<a href="https://meowpress.dev">Website</a>
<a href="mailto:krizia.dev@email.com">Email</a>
<a href="https://www.linkedin.com/in/kbafadriquela">LinkedIn</a>
</p>

---

⭐️ *Thanks for visiting! Feel free to explore my repositories and projects.*

## Preview README.md
*please click the preview link above*`;

  return (
    <>
      <button
        className="preview-btn"
        onClick={() =>
          openFile({ name: "README Preview", path: "/preview", markdown })
        }
      >
        Preview README.md
      </button>
      <div className="codeblock-wrapper">
        <CodeBlock language="javascript" code={markdown} />
      </div>
    </>
  );
};

export default Readme;

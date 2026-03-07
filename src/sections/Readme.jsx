import CodeBlock from "../components/CodeBlock";

const Readme = ({ openFile }) => {
  const markdown =`# 👋 Hi, I'm Krizia Bianca

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
  *A lightweight web app listing all Philippine airport codes, designed for clarity and simplicity.*
  
- 🎨 [**Mint – One Page Portfolio Theme**](https://github.com/kbafadriquela/mint)  
  *A minimalist one-page WordPress theme built with Elementor.*

- 🖥️ [**Portfolio UI – WordPress Theme**](https://github.com/kbafadriquela/portfolio-ui)  
  *A responsive theme inspired by a Figma design, ideal for showcasing creative work.*

---

### 🚀 Currently Focusing On

Currently refining my front-end development craft — blending modern frameworks with WordPress customization to build smooth, responsive, and user-friendly digital experiences.  
Exploring **React.js** to create component-based interfaces that enhance interactivity and performance.  
Continuing to improve **site performance**, **UX design**, and **Elementor theme development**.

---

### 💬 Quotes That Inspire Me

> *“Simplicity is the ultimate sophistication.”* — Leonardo da Vinci  
> *“Design is not just what it looks like and feels like. Design is how it works.”* — Steve Jobs  

---

### 📫 Connect with Me

<p align="center">
  <a href="https://meowpress.dev"><img src="https://img.shields.io/badge/Website-meowpress.dev-7aa2f7?style=for-the-badge&logo=google-chrome&logoColor=white"></a>
  <a href="mailto:krizia.dev@email.com"><img src="https://img.shields.io/badge/Email-Contact%20Me-db4bff?style=for-the-badge&logo=gmail&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/kbafadriquela"><img src="https://img.shields.io/badge/LinkedIn-View%20Profile-1f6feb?style=for-the-badge&logo=linkedin&logoColor=white"></a>
</p>

---

⭐️ *Thanks for visiting! Feel free to explore my repositories and projects.*

   
## Preview README.md
*please click the preview link above*`;
  return (
    <div className="readme-content">
      <button className="preview-btn" onClick={() => openFile({ name: "README Preview", path: "/preview", markdown})
      }
    >Preview README.md</button>

      <CodeBlock language="markdown" code={markdown}></CodeBlock>
    </div>
  );
};

export default Readme;

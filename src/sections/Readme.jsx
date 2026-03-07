import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "../components/CodeBlock";

const Readme = () => {
  const code =`   # Krizia Bianca  
   
   I'm a freelance Wordpress & Frontend Web Developer. My passion is about creating simple and functional websites. 
   
   Welcome to my portfolio built with React and inspired by VS Code. 
        
   ## Skills
   - Wordpress
   - HTML
   - CSS 
   - Javascript 
   - React 
   - PHP 
        
   ## Projects
   Open the files in the explorer to view my work. `;
  return (
    <div className="readme-content">
      <CodeBlock language="markdown" code={code}></CodeBlock>
    </div>
  );
};

export default Readme;

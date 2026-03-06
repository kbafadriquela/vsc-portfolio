import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Readme = () => {
  const md = `
   # Krizia Bianca  
   
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
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{md}</ReactMarkdown>
    </div>
  );
};

export default Readme;

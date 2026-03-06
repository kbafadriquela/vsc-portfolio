import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Projects = () => {
   const code = `
   const Projects = () => {
      return(
         <h2>Works</h2>

         <p>Checkout my <em>works</em> below.</p>
         <ol>
            <li>Project 1</li>
            <li>Project 2</li>
            <li>Project 3</li>
         </ol>
         )
      };

   export default Projects;
   `
 return (
     <SyntaxHighlighter language="jsx" style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
 )   
}

export default Projects;
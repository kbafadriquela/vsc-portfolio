import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const About = () => {
    const code = `
    const developer = {
    name: "Krizia Bianca",
    role: "Frontend & Wordpress Developer",
    experiences: "5+ years",
    skills: ["Wordpress", "HTML", "CSS", "React", "JS", "PHP"]
    }
    `
    return (
        <SyntaxHighlighter language="javascript" style={vscDarkPlus}>{code}</SyntaxHighlighter>
    );
};

export default About;
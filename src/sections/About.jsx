import CodeBlock from "../components/CodeBlock";

const About = () => {
    const code = `const developer = {
name: "Krizia Bianca",
role: "Frontend & Wordpress Developer",
experiences: "5+ years",
skills: ["Wordpress", "HTML", "CSS", "React", "JS", "PHP"],
interests: ["design", "cooking", "netflix", "cats"],
education: "BS in Computer Science - New Era University, PH"
}`
    return (
        <CodeBlock language="javascript" code={code} />
    );
};

export default About;
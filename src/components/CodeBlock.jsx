import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, code }) => {
  return (
    <div className="codeblock-wrapper">
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
        wrapLines={false}        // do NOT wrap long lines
        wrapLongLines={false}    // prevents auto line breaks
        customStyle={{
          margin: 0,
          padding: "16px",
          fontSize: "14px",
          whiteSpace: "pre",      // important for horizontal scroll
          display: "block",
        }}
        lineProps={{ style: { display: "block" } }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
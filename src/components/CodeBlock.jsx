import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ language, code }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={vscDarkPlus}
      showLineNumbers
      wrapLines={true}           // wraps each line
      wrapLongLines={true}       // breaks very long lines
      lineProps={{ style: { 
        whiteSpace: "pre-wrap",  // force line wrap
        wordBreak: "break-word"   // break long words
      }}}
      customStyle={{
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        overflowX: "auto",      // disable horizontal scroll
        overflowY: "auto",        // allow vertical scroll
        margin: 0,
        fontSize: "14px",
        padding: "10px"
      }}
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
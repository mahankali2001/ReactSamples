import { useState } from "react";

interface textProps {
  children: string;
  maxChars?: number;
}

// const ExpandableText: React.FC<textProps> = ({
//   children,
//   maxChars,
//   onBtnClick,
// }) => {
function ExpandableText({ children, maxChars = 100 }: textProps) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);

  return (
    <>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </>
  );
}

export default ExpandableText;

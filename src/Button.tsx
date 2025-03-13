import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
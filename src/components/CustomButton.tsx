import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const CustomButton = ({ children, ...attributes }: Props) => {
  return (
    <button type="button" {...attributes}>
      {children}
    </button>
  );
};

export default CustomButton;

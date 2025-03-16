import { ReactNode } from "react";

interface Props {
  //   text: string;
  //   children: string;
  children: ReactNode;
}

// const Alert = ({ text }: Props) => {
const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;

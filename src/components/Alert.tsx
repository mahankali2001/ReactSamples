import { ReactNode } from "react";

interface Props {
  //   text: string;
  //   children: string;
  children: ReactNode;
  onClose: () => void;
}

// const Alert = ({ text }: Props) => {
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-primary alert-dismissible">{children}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </>
  );
};

export default Alert;

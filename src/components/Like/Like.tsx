import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface likeProps {
  onClick: () => void;
}

function Like({ onClick }: likeProps) {
  // const Like = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart
        color="#ff6b81"
        size="40"
        className={styles.likeStyle}
        onClick={toggle}
      />
    );
  return (
    <AiOutlineHeart size="40" className={styles.likeStyle} onClick={toggle} />
  );
}

export default Like;

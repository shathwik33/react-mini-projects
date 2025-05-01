import styles from "./styles.module.css";

function Todo({ details }) {
  const { text, index } = details;
  return (
    <li key={index} className={styles}>
      {text}
    </li>
  );
}

export default Todo;

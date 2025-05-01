import styles from "./styles.module.css";

function Greeting({ name }) {
  return (
    <div className={styles.wrapper}>
      <h1>Hello, {name}!</h1>
      <p>
        Welcome to your personal dashboard! Below you'll find a list of users in
        our system
      </p>
    </div>
  );
}

export default Greeting;

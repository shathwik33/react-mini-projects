import "./styles.css";
import Greeting from "./Greeting";
import UserListItem from "./UserListItem";

function Project1() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  return (
    <div className="container">
      <Greeting name="Shathwik" />
      <div className="heading">
        <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
          <circle cx="25" cy="25" r="10" fill="blue" />
        </svg>
        <h3>User Directory</h3>
      </div>
      {users.map((user) => (
        <UserListItem details={user} key={user.id} />
      ))}
    </div>
  );
}

export default Project1;

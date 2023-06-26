import { useEffect, useState } from "react";

export default function Effect1() {
  const [users, setUsers] = useState([]);
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      return false;
    };
  }, []);

  useEffect(() => {
    setFilterUsers(users);
  }, [users]);

  const handelChange = (e) => {
    const filter = users.filter((user) =>
      user.name.toLowerCase().includes(e.target.value)
    );
    setFilterUsers(filter);
  };

  return (
    <>
      <input type="text" className="search" onInput={handelChange}></input>

      {filterUsers.map((user) => (
        <h2 key={user.id}>{user.name}</h2>
      ))}
    </>
  );
}

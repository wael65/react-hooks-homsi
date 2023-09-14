import React, { useState } from "react";
// import Table from "react-bootstrap/Table";
// import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
// import "bootstrap/dist/css/bootstrap.min.css";
import { data } from "./data.js";

function Search() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };
  console.log(search);
  return (
    <div>
      <h1 className="text-center mt-4">Contact Keeper</h1>
      <form>
        <input
          // onChange for search
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts"
        />
      </form>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Search;

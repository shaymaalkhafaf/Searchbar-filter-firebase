import React, { useState } from "react";
import { Users } from "../users";
import { firebaseCRUD } from "../services/firebase/crud";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const handleListItemClick = (user) => {
    setSelectedUser(user);
  };

  const getTestData = async (collection) => {
    console.log(await firebaseCRUD.readAll(collection));
  };

  return (
    <div className="container1">
      <div>
      <input
        type="text"
        placeholder="Search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button class="button button2">Search</button>

      </div>

      <div className="content">
        <ul className="list">
          {Users.filter((user) =>
            user.first_name.toLowerCase().includes(query)
          ).map((user) => (
            <li
              key={user.id}
              className={`listItem ${
                selectedUser && selectedUser.id === user.id ? "active" : ""
              }`}
              onClick={() => handleListItemClick(user)}
            >
              <div>
              <h2>{user.first_name}</h2>
              <h3>{user.last_name}</h3>
              </div>
            </li>
          ))}
        </ul>
        {selectedUser && (
          <div className="userDescription">
            <h2>
              {selectedUser.first_name} {selectedUser.last_name}
            </h2>
            <p>{selectedUser.description}</p>
          </div>
        )}
        <button onClick={() => getTestData("Companies")}>Get Test Data</button>
      </div>
    </div>
    
  );
};

export default Home;

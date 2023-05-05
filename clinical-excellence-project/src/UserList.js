import React, { useState } from "react";
// import UserData from "./UserData";

const UserData = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@gmail.com",
    phone: "555-555-5555",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@yahoo.com",
    phone: "555-555-5555",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@hotmail.com",
    phone: "555-555-5555",
  },
];

const UserList = () => {
  const [users, setUsers] = useState(UserData);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container">
      <h2>User List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddUserForm addUser={addUser} />
    </div>
  );
};

const AddUserForm = ({ addUser }) => {
  const initialFormState = { id: null, name: "", age: "", email: "" };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user.name || !user.age || !user.email) return;
    addUser(user);
    setUser(initialFormState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add User</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          name="age"
          value={user.age}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={user.email}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default UserList;

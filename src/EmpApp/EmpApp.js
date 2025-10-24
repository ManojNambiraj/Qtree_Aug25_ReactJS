import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function EmpApp() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const userData = await axios.get(`https://68f8dc76deff18f212b7cda4.mockapi.io/users`);

    setUsers(userData.data)
  }

  return (
    <div>
      <Link to={"/create"} className="btn btn-primary m-4">
        Create user
      </Link>
      
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => {
            return (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default EmpApp;


// Create   Read     Update    Delete
//  POST     GET       PUT      DELETE   // Http methods
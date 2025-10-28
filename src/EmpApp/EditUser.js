import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {

     const navigate = useNavigate();
     const {id} = useParams();

     const [userInput, setUserInput] = useState({
       name: "",
       age: "",
       email: "",
       mobile: "",
       password: "",
     });

     useEffect(() => {
        getData()
     }, [])

     const getData = async () => {
        const userData = await axios.get(`https://68f8dc76deff18f212b7cda4.mockapi.io/users/${id}`);

        setUserInput(userData.data);
     }

     const handleChange = ({ target: { value, name } }) => {
       setUserInput({ ...userInput, [name]: value });
     };

     const handleSubmit = async (e) => {
       e.preventDefault();

       const createdData = await axios.put(
         `https://68f8dc76deff18f212b7cda4.mockapi.io/users/${id}`,
         userInput
       );

       if (createdData) {
         navigate("/");
       }
     };


  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", paddingBottom: "20px" }}>
          Update User
        </h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="age"
            value={userInput.age}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={userInput.email}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="mobile"
            value={userInput.mobile}
            onChange={handleChange}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userInput.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUser;

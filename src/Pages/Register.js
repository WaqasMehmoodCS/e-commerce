import { Email, HowToReg, Lock, Person } from "@mui/icons-material";
import { Button, Input } from "@mui/joy";
import React, { useState } from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "../Data/APIData";
import { useNavigate } from "react-router";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(user);
  const navigate = useNavigate();
  const addUser = async () => {
    if (user.username && user.email && user.password !== "") {
      try {
        const userAdded = await axios.post("/users", JSON.stringify(user));
        alert(`User "${user.username}" added Successfuly !`);
        navigate("/signin");
        console.log(userAdded);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Enter Valid Data");
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    addUser();
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="container">
        <Header />
        <div
          style={{
            boxShadow: "5px 5px 5px 5px lightBlue",
            borderRadius: 10,
          }}
        >
          <div className="row">
            <div className="col d-flex justify-content-center mt-5">
              <h1 style={{ letterSpacing: 5 }}>REGISTER</h1>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center mt-5">
              <Input
                placeholder="User Name"
                name="username"
                value={user.username}
                onChange={handleChange}
                startDecorator={<Person />}
                sx={{ width: "50%" }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center mt-3">
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                startDecorator={<Email />}
                sx={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center  mt-3 mb-5">
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={handleChange}
                startDecorator={<Lock />}
                sx={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center mb-5">
              <Button
                sx={{ width: "50%" }}
                startDecorator={<HowToReg />}
                onClick={registerUser}
                type="submit"
              >
                REGISTER
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;

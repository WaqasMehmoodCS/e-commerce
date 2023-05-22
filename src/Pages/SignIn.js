import { DoorBack, Lock, Person } from "@mui/icons-material";
import { Button, Input } from "@mui/joy";
import React, { useEffect, useState } from "react";
import axios from "../Data/APIData";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router";

const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let result = await axios.get(`/users`);
      let data = result.data;
      setUsers(data);
    } catch (error) {
      alert(`Error : `, error);
      console.log(`Error : `, error);
    }
  };

  const handleLogin = () => {
    let findUser = users.find((item) => {
      return item.username === username && item.password === password;
    });
    if (!username && !password) {
      alert("Enter Credentials");
    } else if (findUser) {
      setusername("");
      setPassword("");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
      setusername("");
      setPassword("");
    }
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
              <h1 style={{ letterSpacing: 5 }}>LOGIN</h1>
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center mt-5">
              <Input
                placeholder="User Name"
                startDecorator={<Person />}
                sx={{ width: "50%" }}
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                type="text"
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center  mt-3 mb-5">
              <Input
                placeholder="Password"
                value={password}
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                startDecorator={<Lock />}
                sx={{ width: "50%" }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col d-flex justify-content-center mb-5">
              <Button
                sx={{ width: "50%" }}
                startDecorator={<DoorBack />}
                onClick={handleLogin}
              >
                LOGIN
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;

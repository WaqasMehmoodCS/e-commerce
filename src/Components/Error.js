import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  useEffect(() => {
    alert("Enter Correct Path");
    navigate("/");
  }, [navigate]);
  return <></>;
};

export default Error;

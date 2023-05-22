import {
  Edit,
  Email,
  EmailOutlined,
  Facebook,
  Instagram,
  LocationCity,
  PermIdentity,
  Phone,
  Twitter,
} from "@mui/icons-material";
import { Input, Textarea } from "@mui/joy";
import { Button } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <>
      <div
        className="container mt-3 p-0 mb-5"
        style={{ backgroundColor: "#537FE7", color: "white", borderRadius: 7 }}
      >
        <div className="row p-3">
          <div className="col">
            <h1 style={{ letterSpacing: 3 }}>CONTACT US</h1>
            <p style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
        </div>
        <div
          className="row row-cols-3 p-3 "
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <div
            className="col-4 "
            style={{
              textAlign: "center",
            }}
          >
            <h4>TALK WITH US</h4>
            <p>
              <Phone style={{ marginRight: 10 }} />
              +92-51-64646464646
            </p>
            <p>
              <Email style={{ marginRight: 10 }} />
              abc@gmail.com
            </p>
            <p>
              <LocationCity style={{ marginRight: 10 }} />
              Office No.654, Situated at Islamabad
            </p>
          </div>
          <div
            className="col-4 "
            style={{
              textAlign: "center",
            }}
          >
            <h4>SAY HELLO</h4>
            <Input
              startDecorator={<PermIdentity />}
              placeholder="Name"
              style={{ marginTop: 10 }}
            />
            <Input
              startDecorator={<EmailOutlined />}
              placeholder="Email"
              style={{ marginTop: 10 }}
            />
            <Input
              startDecorator={<Phone />}
              placeholder="Telephone"
              style={{ marginTop: 10 }}
            />
            <Textarea
              startDecorator={<Edit />}
              placeholder="Comments"
              style={{ marginTop: 10 }}
            />
            <Button
              style={{
                backgroundColor: "#39B5E0",
                color: "white",
                width: "100%",
                borderRadius: "10px",
                padding: 15,
                marginTop: 15,
              }}
            >
              Submit
            </Button>
          </div>
          <div
            className="col-4 "
            style={{
              textAlign: "center",
            }}
          >
            <h4>KEEP CONECTED</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",

                alignItems: "center",
              }}
            >
              <Facebook style={{ marginBottom: 20 }} />
              <Twitter style={{ marginBottom: 20 }} />
              <Instagram style={{ marginBottom: 20 }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import signUp from "../firebase/auth/signUp";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    signUp(email, password, name);
  };

  return (
    <>
      <h1>Create your account!</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name">Name:</label>{" "}
        <input
          placeholder="John Doe"
          id="name"
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <label htmlFor="email">Email:</label>{" "}
        <input
          placeholder="johndoe@hotmail.com"
          id="email"
          type="text"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <label htmlFor="password">Password:</label>{" "}
        <input
          id="password"
          type="text"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => (window.location.href = "/")}>Back</button>
    </>
  );
}

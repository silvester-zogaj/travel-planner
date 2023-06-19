"use client";
import React, { useState } from "react";
import signUp from "../firebase/auth/signUp";
import Link from "next/link";
import { getErrorMessage } from "../firebase/authErrors";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { error, result } = await signUp(email, password, name);
      if (error) {
        setStatus(getErrorMessage(error.code));
      } else if (result) {
        setStatus("Account created!");
      }
    } catch (error) {
      setStatus("An error occurred during sign-in");
    }
  };

  return (
    <>
      <h1>Create your account!</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name">Name:</label>{" "}
        <input
          placeholder="John Doe"
          id="name"
          required
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />{" "}
        <label htmlFor="email">Email:</label>{" "}
        <input
          placeholder="johndoe@hotmail.com"
          id="email"
          required
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />{" "}
        <label htmlFor="password">Password:</label>{" "}
        <input
          id="password"
          required
          minLength={6}
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </p>
        <p>{status}</p>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => (window.location.href = "/")}>Back</button>
    </>
  );
}

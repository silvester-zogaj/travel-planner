"use client";
import { useContext, useState } from "react";
import signIn from "../firebase/auth/signIn";
import { AuthContext } from "../context/AuthContext";


const getErrorMessage = (authCode: string) => {
  switch (authCode) {
    case "auth/wrong-password":
      return "Invalid password";
    case "auth/invalid-email":
    case "auth/user-not-found":
      return "Invalid email";
    default:
      return `Unknown error ${authCode}}`;
  }

}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const { user } = useContext(AuthContext)
  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();

    signIn(email, password).then(({ result, error }) => {
      if (error) {
        setStatus(getErrorMessage(error.code));
      }
      if (result?.user.email) {
        setStatus(`Signed in as ${result.user.email}`);
      }
    }
    )
  }
  
  return (
    <>
      <h1>Sign in!</h1>
      <p> Current User: {user?.email ?? "None"} </p>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input placeholder="johndoe@hotmail.com" id="email" type="text" onChange={(event) => {
          setEmail(event.target.value)
        }} />
        <label htmlFor="password">password:</label>
        <input placeholder="password" id="password" type="text" onChange={(event) => {
          setPassword(event.target.value)
        }} />
        <p> {status} </p>
        <br></br>
        <a href="/">Forgot Password</a>
        <br></br>
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => window.location.href = '/'}>Back</button>
    </>
  );
}




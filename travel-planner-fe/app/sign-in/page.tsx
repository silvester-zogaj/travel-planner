"use client";
import { useContext, useEffect, useState } from "react";
import signIn from "../firebase/auth/signIn";
import { AuthContext } from "../context/AuthContext";
import resetPassword from "../firebase/auth/resetPassword";
import { getErrorMessage } from "../firebase/authErrors";
import { redirect } from "next/navigation";

export default function SignIn() {
  // SignIn  form
  const { user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  // Reset password form
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const [resetEmailError, setResetEmailError] = useState("");

  useEffect(() => {
    if (user) {
      redirect("/home");
    }
  }, [user]);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const { error } = await signIn(email, password);
      if (error) {
        setStatus(getErrorMessage(error.code));
      }
    } catch (error) {
      setStatus("An error occurred during sign-in");
    }
  };

  const handleResetPassword = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      await resetPassword(resetEmail);
      setResetEmailSent(true);
    } catch (error) {
      setResetEmailError("Failed to reset password");
    }
  };

  const toggleResetPassword = () => {
    setShowResetPassword(!showResetPassword);
    setResetEmailSent(false);
    setResetEmailError("");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setStatus("");
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
    setStatus("");
  };

  const handleResetEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setResetEmail(event.target.value);
    setResetEmailError("");
  };

  return (
    <>
      <h1>Sign in!</h1>
      <form onSubmit={handleSignIn}>
        <label htmlFor="email">Email:</label>
        <input
          placeholder="johndoe@hotmail.com"
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />{" "}
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>{status}</p>
        <button type="submit">Sign in</button>
      </form>
      <button onClick={() => (window.location.href = "/")}>Back</button>
      <br />
      <a href="#" onClick={toggleResetPassword}>
        Forgot Password
      </a>
      <br />
      {showResetPassword && (
        <form onSubmit={handleResetPassword}>
          <label htmlFor="reset">Email:</label>
          <input
            placeholder="johndoe@hotmail.com"
            id="reset"
            type="email"
            value={resetEmail}
            onChange={handleResetEmailChange}
          />
          <button type="submit">Reset password</button>
          {resetEmailError && <p>{resetEmailError}</p>}
          {resetEmailSent && (
            <p>If this user exists, we have sent you a password reset email</p>
          )}
        </form>
      )}
    </>
  );
}

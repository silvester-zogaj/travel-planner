"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <h1>Travel Planner</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <button>
        <Link href="/sign-in">sign in</Link>
      </button>
      <br></br>
      <p>
        If you do not have an account
        <Link href="/sign-up"> sign up here</Link>
      </p>
    </main>
  );
}

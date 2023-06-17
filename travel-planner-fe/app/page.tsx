"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main>
      <h1>Ready, Jet Set, Go! 🧳</h1>
      <p>
        Welcome to your itinerary travel planner, the ultimate companion for
        seamless trip organization and unforgettable adventures!
      </p>
      <button>
        <Link href="/sign-in">Sign in</Link>
      </button>
      <br></br>
      <p>
        If you do not have an account, <Link href="/sign-up">sign up here</Link>
      </p>
    </main>
  );
}

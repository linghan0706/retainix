import Link from "next/link";

export default function RegisterPage() {
  return (
    <form className="form">
      <h1>Register</h1>
      <input className="input" type="email" placeholder="Email" required />
      <input className="input" type="password" placeholder="Password" required />
      <input className="input" type="password" placeholder="Confirm password" required />
      <button className="btn" type="submit">
        Create Account
      </button>
      <p>
        Already registered? <Link href="/login">Sign in</Link>
      </p>
    </form>
  );
}

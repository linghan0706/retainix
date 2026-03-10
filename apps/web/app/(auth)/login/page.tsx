import Link from "next/link";
import { loginAction } from "./actions";

export default function LoginPage() {
  return (
    <form className="form" action={loginAction}>
      <h1>Login</h1>
      <input className="input" name="email" type="email" placeholder="Email" required />
      <input className="input" name="password" type="password" placeholder="Password" required />
      <button className="btn" type="submit">
        Sign In
      </button>
      <p>
        No account? <Link href="/register">Create one</Link>
      </p>
    </form>
  );
}

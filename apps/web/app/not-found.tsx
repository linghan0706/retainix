import Link from "next/link";

export default function NotFound() {
  return (
    <main className="auth-shell">
      <section className="form">
        <h1>404 - Page Not Found</h1>
        <p>The page you requested does not exist.</p>
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </section>
    </main>
  );
}

"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="auth-shell">
      <section className="form">
        <h1>Something went wrong</h1>
        <p>{error.message}</p>
        <button className="btn" onClick={reset}>
          Retry
        </button>
      </section>
    </main>
  );
}

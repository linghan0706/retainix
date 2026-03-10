import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <h2>Retainix</h2>
        <nav style={{ display: "grid", gap: 10, marginTop: 12 }}>
          <Link href="/">Overview</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/outlines">Outlines</Link>
          <Link href="/stats">Stats</Link>
          <Link href="/session/review">Review</Link>
        </nav>
      </aside>
      <section className="main">
        <header className="header">
          <strong>Learning Dashboard</strong>
        </header>
        {children}
      </section>
    </div>
  );
}

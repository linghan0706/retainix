export default function DashboardHomePage() {
  return (
    <main>
      <h1>Welcome to Retainix</h1>
      <p>Start by uploading a document and generating your learning outline.</p>
      <section className="card-grid" style={{ marginTop: 16 }}>
        <article className="card">
          <h3>Today Reviews</h3>
          <p>0 cards</p>
        </article>
        <article className="card">
          <h3>Active Outlines</h3>
          <p>0 outlines</p>
        </article>
        <article className="card">
          <h3>Retention Score</h3>
          <p>--</p>
        </article>
      </section>
    </main>
  );
}

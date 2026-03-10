import Link from "next/link";

export default function DocumentsPage() {
  return (
    <main>
      <h1>Documents</h1>
      <p>Manage uploaded files and parse status.</p>
      <ul>
        <li>
          <Link href="/documents/doc_demo">doc_demo (queued)</Link>
        </li>
      </ul>
    </main>
  );
}
